import React from 'react'
import {ADD_TODO} from '../commons/constants'
import {useTodosContext} from '../context/TodosContext'

const AddTodo = () => {
    const [newTitle, setNewTitle] = React.useState('');
    const dispatch = useTodosContext()[1];
    const handleSubmit = React.useCallback(e => {
        e.preventDefault();
        dispatch({type: ADD_TODO, payload: newTitle})
        setNewTitle('')
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