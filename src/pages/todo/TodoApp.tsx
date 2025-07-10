import { Fragment, useEffect, useState } from 'react'

import './TodoApp.css';
import { useTheme } from '../../hooks/use-theme';
import { Moon, Sun } from 'lucide-react';
import AddTodo from './AddTodo';
import { TodoItem } from './TodoItem';
import { useTodoStore } from '../../state-management/zustand/todo-store';

function TodoApp() {
  const { theme, toggleTheme } = useTheme();
  const { todos } = useTodoStore();

  const initComponent = async () => {
      try {
        //TODO ADD DATA FROM API
      } catch (error) {
        
      }
    }
  useEffect(() => {
    console.log('COMPONENT MOUNTED');
    initComponent();
    return () => {
      console.log('COMPONENT UNMOUNTED')
    }
  },[])

  return (
    <>
        <div className='todo-app'>
          <div className='todo-app__header'>
            <h1 className='todo_app__title'>Todo App</h1>
            <button onClick={toggleTheme} className={`theme-toggle theme-toggle--${theme}`}>
              {theme === 'dark' ? <Sun size={14}/> : <Moon size={14}/>}
            </button>
            {theme}
          </div>
          <div className={`todo-list todo-list--${theme}`}>
              <AddTodo />
              {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo}/>
              ))}
          </div>
        </div>
    </>
  )
}

export default TodoApp
