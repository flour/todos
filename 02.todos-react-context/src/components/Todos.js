import React from 'react'
import { DELETE_TODO } from '../commons/constants'
import { useTodosContext } from '../context/TodosContext'

const Todos = () => {
    const [state, dispatch] = useTodosContext();

    const deleteTodo = React.useCallback(id => {
        dispatch({ type: DELETE_TODO, payload: id })
    }, [dispatch]);

    const todosList = state.todos.length ? (
        state.todos.map(todo => (
            <div className="col s12 m6 xl14" key={todo.id}>
                <div className="card">
                    <div className="card-content">
                        <div className="card-title">{todo.title}</div>
                        <div className="card-action">
                            <button onClick={() => deleteTodo(todo.id)} className="waves-effect waves-light btn">Done</button>
                        </div>
                    </div>
                </div>
            </div>
        ))
    ) : (
            <div className="card">
                <div className="card-content">
                    <div className="card-title">No todo's left! Wooohooo!</div>
                </div>
            </div>
        );
    return (
        <div className="container">
            <div className="row">
                {todosList}
            </div>
        </div>
    );
};

export default Todos;