import { create } from 'zustand';
import type { Todo } from '../../types/todo';
import type { TodoStoreType } from '../../types/todo-store-type';

interface TodoStore extends TodoStoreType {
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
}

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],
  filter: 'all',
  addTodo: (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    set((state) => ({
      todos: [...state.todos, newTodo],
    }));
  },
  deleteTodo: (id: string) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  toggleTodo: (id: string) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
  setFilter: (filter: 'all' | 'active' | 'completed') => {
    set({ filter });
  },
}));