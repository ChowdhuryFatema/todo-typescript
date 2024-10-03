import { FormEvent, useState } from "react";


const AddTodo = () => {
    const [todo, setTodo] = useState("");

    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // handleAddToDo(todo)
        setTodo("")
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo;