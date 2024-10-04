import { createContext, ReactNode, useContext, useState } from "react";

export type TodosProviderProps = {
    children: ReactNode
}

export type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
}

export type TodosContext = {
    todos:Todo[]
    handleAddToDo:(task: string) => void;
    toggleTodoAsCompleted:(id:string) => void;
}

export const todosContext = createContext<TodosContext | null>(null);

const TodosProvider = ({ children }: TodosProviderProps) => {

    const [todos, setTodos] = useState<Todo[]>([])

    const handleAddToDo = (task: string) => {

        setTodos((prev) => {

            const newTodos: Todo[] = [
                {
                    id: Math.random().toString(),
                    task: task,
                    completed: false,
                    createdAt: new Date(),
                },
                ...prev
            ]
            // console.log('my previous data', prev)
            // console.log(newTodos)
            return newTodos;
        })

    }

    const toggleTodoAsCompleted = (id: string) => {
        setTodos((prev) => {
            let newTodos = prev.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo; 
            });
            return newTodos;
        });
    };
    
    // const handleDeleteTodo = (id) => {
        
    // }

    return (
        <todosContext.Provider value={{ todos, handleAddToDo, toggleTodoAsCompleted }}>
            {children}
        </todosContext.Provider>
    );
};

// consumer 
export const useTodos = () => {
    const todosConsumer = useContext(todosContext);
    if(!todosConsumer){
        throw new Error("useTodos used outside of Provider");
    }
    return todosConsumer;
} 



export default TodosProvider;

