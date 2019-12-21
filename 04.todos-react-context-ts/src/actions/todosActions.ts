import {ADD_TODO, DELETE_TODO} from './constants';

export type AddTodo = {
    type: typeof ADD_TODO,
    payload: string
}

export type DeleteTodo = {
    type: typeof DELETE_TODO,
    payload: number
}

export type TodosAction =  AddTodo | DeleteTodo;

export const addAction = (dispatch: React.Dispatch<TodosAction>, payload: string) => dispatch({ type: ADD_TODO, payload });
export const deleteAction = (dispatch: React.Dispatch<TodosAction>, payload: number) => dispatch({ type: DELETE_TODO, payload });