import React from "react";

const Todos = ({ todos, deleteTodo }) => {    
    const todosList = todos && todos.length ? (
        todos.map(todo => (
            <div className="collection-item row" key={todo.id}>                
                <div className="col s11">{todo.title}</div>
                <div onClick={() => deleteTodo(todo.id)} className="col s1 red-text">
                    <a className="btn-floating pulse center">done</a>
                </div>
            </div>
        ))
    ) : (
        <div className="center">There is no todos! Have fun!</div>
    );
    
    return (
        <div className="todos collection">
            {todosList}
        </div>
    )
};

export default Todos;
