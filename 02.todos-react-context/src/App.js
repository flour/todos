import React from 'react';
import {TodosContext, useTodosContext, todosReducer} from './context/TodosContext'
import Navbar from './components/Navbar'

function App() {
    const todosValue = React.useReducer(todosReducer, useTodosContext());
    return (
        <TodosContext.Provider value={todosValue} >
            <div className="App">
                <Navbar/>
            </div>
        </TodosContext.Provider>        
    );
}

export default App;
