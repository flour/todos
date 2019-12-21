import React, { useReducer } from 'react'
import { initialState, IState } from '../commons/state'
import { TodosAction } from '../actions/todosActions'
import { todosReducer } from './todoReducer'
import { usePersistedContext, usePersistedReducer } from './persist';

export interface IContextProps {
  state: IState;
  dispatch: React.Dispatch<TodosAction>;
}

export const TodosStore = React.createContext({ state: initialState } as IContextProps);
export const useTodosContext = () => React.useContext(TodosStore);

export const TodosProvider = (props: any) => {
  const [state, dispatch] = usePersistedReducer(
    useReducer(todosReducer, usePersistedContext(initialState)),
  );
  const value: IContextProps = { state, dispatch };
  return (
    <TodosStore.Provider value={value}>
      {props.children}
    </TodosStore.Provider>
  );
}

