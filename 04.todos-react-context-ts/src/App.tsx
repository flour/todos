import React from 'react';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
import AddTodo from './components/AddTodo'
import { TodosProvider } from './context/TodosContext';

const App: React.FC = () => {
  return (
    <div className="App">
      <TodosProvider>
        <div>
          <Navbar />
          <AddTodo />
          <Todos />
        </div>
      </TodosProvider>
    </div>
  );
};

export default App;
