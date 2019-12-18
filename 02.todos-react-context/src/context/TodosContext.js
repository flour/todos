import React from 'react'

const initialState = {
    todos: [
        {id: 1, title: 'Make something good'},
        {id: 2, title: 'Make something bad'},
    ],
};

export const TodosContext = React.createContext(initialState);
export const useTodosContext = () => React.useContext(TodosContext);
export const todosReducer = (state, action) => {
    return state;
};