import { useEffect } from 'react'
import { IState } from '../commons/state'
import { TodosAction } from '../actions/todosActions'

export const usePersistedContext = (state: IState, key = 'state'): IState => {
    const persistedContext = localStorage.getItem(key);
    return persistedContext ? JSON.parse(persistedContext) as IState : state;
};

export const usePersistedReducer = ([state, dispatch]: [IState, React.Dispatch<TodosAction>], key = 'state'): [IState, React.Dispatch<TodosAction>] => {
    useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [state, key]);
    return [state, dispatch];
};