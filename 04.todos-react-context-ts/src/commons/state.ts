export interface ITodo {
    id: number;
    title: string;
}

export interface IState {
    todos: ITodo[]
}

export const initialState: IState = {
    todos: [
        {id: 1, title: 'Todo one'},
        {id: 2, title: 'Todo two'}
    ]
};