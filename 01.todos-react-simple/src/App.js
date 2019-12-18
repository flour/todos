import React from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

const initialState = {
    todos: [
        {id: 1, title: 'get some job'},
        {id: 2, title: 'buy flowers to wife'},
    ]
};

const App = () => {
    const [appState, setAppState] = React.useState(initialState);
    
    const deleteTodo = React.useCallback(id => {
        if (id) {
            const todos = appState.todos.filter(todo => todo.id !== id);
            setAppState({todos});
        }
    }, [appState, setAppState]);
    
    const addTodo = React.useCallback(title => {
        const newTodo = { id: Math.random(), title };
        setAppState({ todos: [...appState.todos, newTodo] });
    }, [appState, setAppState]);
    
    return (
        <div className="todos-app container">
            <h1 className="center"> Todo's list </h1>
            <AddTodo addTodo={addTodo}/>
            <Todos deleteTodo={deleteTodo} todos={appState.todos}/>
        </div>
    );
}

export default App;
