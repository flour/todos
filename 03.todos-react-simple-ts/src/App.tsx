import React from 'react';
import {initialState} from "./commons/state";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

const App: React.FC = () => {
    const [appState, setAppState] = React.useState(initialState);

    const deleteTodo = React.useCallback((id: number) => {
        if (id) {
            const todos = appState.todos.filter(todo => todo.id !== id);
            setAppState({todos});
        }
    }, [appState, setAppState]);

    const addTodo = React.useCallback((title: string) => {
        const newTodo = {id: Math.random(), title};
        setAppState({todos: [...appState.todos, newTodo]});
    }, [appState, setAppState]);
    return (
        <div className="App">
            <nav className="nav-wrapper purple darken-2">
                <div className="container">
                    <span className="brand-logo">Todo's</span>
                </div>
            </nav>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={appState.todos} deleteTodo={deleteTodo}/>
        </div>
    );
};

export default App;
