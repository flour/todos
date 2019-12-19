import React from 'react'

export interface Props {
    addTodo: (title: string) => void;
}

const AddTodo: React.FC<Props> = (props: Props) => {
    const { addTodo } = props;
    const [newTitle, setNewTitle] = React.useState('');
    const handleSubmit = React.useCallback((e: React.SyntheticEvent) => {
        e.preventDefault();
        addTodo(newTitle);
        setNewTitle('');
    }, [newTitle, setNewTitle, addTodo]);
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label>Add new todo</label>
                <input type="text" onChange={e => setNewTitle(e.target.value)} value={newTitle} />
            </form>
        </div>
    )
};

export default AddTodo;