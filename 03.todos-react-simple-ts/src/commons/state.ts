export interface Todo {
    id: number;
    title: string;
}

export interface State {
   todos: Todo[]
}

export const initialState: State = {
    todos: [
        {id: 1, title: 'Todo one'},
        {id: 2, title: 'Todo two'}
    ]
};