import { useEffect, useState } from "react"
import { TodoStore } from "../state-management/zustand/todo-store";
const todoStore = new TodoStore();
export const useTodoStore = () => {
    const [state, setState] = useState(todoStore.getState());
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({}); 
    useEffect(() => {
        todoStore.setState(todoStore.getState())
    }, [])
    
    return {
        ...state,
        addTodo: todoStore.addTodo,
        toogleTodo: todoStore.toogleTodo,
        deleteTodo: todoStore.deleteTodo
    }
}