import React from 'react'
import { TodosContext, useTodosContext, todosReducer } from './context/TodosContext'
import Navbar from './components/Navbar'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
    const state = React.useReducer(todosReducer, useTodosContext());
    return (
        <TodosContext.Provider value={state} >
            <div className="App">
                <Navbar />
                <AddTodo />
                <Todos />
            </div>
        </TodosContext.Provider>
    );
}

export default App;
