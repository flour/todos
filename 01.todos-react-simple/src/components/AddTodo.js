import React from "react"

const AddTodo = ({ addTodo }) => {
    const [newTitle, setNewTitle] = React.useState('');
    const handleSubmit = React.useCallback(e => {
        e.preventDefault();        
        if (!newTitle) 
            return;
        addTodo(newTitle);
        setNewTitle('');
    }, [newTitle, addTodo, setNewTitle]);
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add new todo</label>
                <input type="text" onChange={e => setNewTitle(e.target.value)} value={newTitle}/>
            </form>
        </div>  
    );
};

export default AddTodo;