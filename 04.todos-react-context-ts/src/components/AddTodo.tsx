import React from 'react'
import { useTodosContext } from '../context/TodosContext';
import { addAction } from '../actions/todosActions';

const AddTodo: React.FC = () => {
  const [newTitle, setNewTitle] = React.useState('');

  const dispatch = useTodosContext().dispatch;

  const handleSubmit = React.useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    addAction(dispatch, newTitle);
    setNewTitle('');
  }, [dispatch, newTitle, setNewTitle]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Add new todo</label>
        <input type="text" onChange={e => setNewTitle(e.target.value)} value={newTitle} />
      </form>
    </div>
  );
};

export default AddTodo;