import React from 'react'
import { useTodosContext } from '../context/TodosContext'
import { deleteAction } from '../actions/todosActions'

const Todos: React.FC = () => {
  const { state, dispatch } = useTodosContext();
  const deleteTodo = React.useCallback(id => {
    if (id) {
      deleteAction(dispatch, id);
    }
  }, [dispatch]);

  const todoList = state.todos.length ? (
    state.todos.map(todo => (
      <div className="col s12 m6 xl14" key={todo.id}>
        <div className="card">
          <div className="card-content">
            <div className="card-title">{todo.title}</div>
            <div className="card-action">
              <button onClick={() => deleteTodo(todo.id)} className="waves-effect waves-light btn red">Done</button>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
      <div className="flow-text">
        There is not todo's left!
      </div>
    )

  return (
    <div className="container">
      <div className="row">
        {todoList}
      </div>
    </div>
  );
};

export default Todos;