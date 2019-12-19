import React from 'react'
import {ADD_TODO, DELETE_TODO} from '../commons/constants'

const initialState = {
    todos: [
        {id: 1, title: 'Make something good'},
        {id: 2, title: 'Make something bad'}
    ]
};

export const TodosContext = React.createContext(initialState);
export const useTodosContext = () => React.useContext(TodosContext);

export const todosReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { id: Math.random(), title: action.payload }]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(e => e.id !== action.payload)
            };
        default:
            return state
    }

};