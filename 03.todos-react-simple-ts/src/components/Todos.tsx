import React from 'react'
import {Todo} from "../commons/state";

export interface Props {
    todos: Todo[];
    deleteTodo: (id: number) => void;
}

const Todos: React.FC<Props> = (props: Props) => {
    const {todos, deleteTodo} = props;
    const todosList = todos && todos.length ? (
        todos.map((todo: Todo) => (
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
    ) : (<h4 className="green-text">There is no todos left... =(</h4>);
    
    return (
      <div className="container">
          <div className="row">
            {todosList}
          </div>
      </div>  
    );
};

export default Todos