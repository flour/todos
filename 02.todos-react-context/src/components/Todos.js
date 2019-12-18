import React from 'react'
import {useTodosContext} from "../context/TodosContext";

const Todos = () => {
    const [todos, dispatch] = useTodosContext()
    const todosList = todos.length ? (
        todos.map(todo => (
            <div className="card" key="todo.id">
                <div className="card-title">{todo.title}</div>
                <div className="card-action">
                    <a href="#">Done
                        <
                        !doctype html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                                <meta name="viewport"
                                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                                        <title>Document</title>
                        </head>
                        <body>
                        
                        </body>
                        </html></a>
                </div>
            </div>
        ))
    ) : (
        <div>No todo's left</div>
    );
    return (
        <div>
            {todosList}
        </div>
    );
};

export default Todos;