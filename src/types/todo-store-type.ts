import type { Todo } from "./todo";

export interface TodoStoreType {
    todos: Todo[];
    filter: 'all' | 'active' | 'completed'
}