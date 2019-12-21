import { IState } from '../commons/state'
import { TodosAction } from '../actions/todosActions'
import { ADD_TODO, DELETE_TODO } from '../actions/constants'

export const todosReducer = (state: IState, action: TodosAction) => {
  if (!action || !action.payload)
    return state;
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: Math.random(), title: action.payload }]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(td => td.id !== action.payload)
      };
  }
  return state;
};