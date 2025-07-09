import type { Todo } from "../../types/todo";
import type { TodoStoreType } from "../../types/todo-store-type";

export class TodoStore {
    private state: TodoStoreType = {
        todos: [] as Todo[],
        filter: 'all' as 'all' | 'active' | 'completed'
    }

    getState = () => this.state;

    setState = (newState: Partial<TodoStoreType>) => {
        this.state = {...this.state, ...newState}
    }

    addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now().toString(),
            text: text,
            completed: false,
            createdAt: new Date()
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    deleteTodo = (id: string) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    toogleTodo = (id: string) => {
        this.setState({
            todos: this.state.todos.map(todo => 
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        })
    }
}