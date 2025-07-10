import { useCallback, useState } from 'react'

import './TodoApp.css';
import type { Todo } from '../../types/todo';
import { useTheme } from '../../hooks/use-theme';
import { Check, Trash2 } from 'lucide-react';
import { useTodoStore } from '../../state-management/zustand/todo-store';

export const TodoItem: React.FC<{todo: Todo}> = ({ todo }) => {
   const { theme } = useTheme();
   const { toggleTodo, deleteTodo } = useTodoStore();
   
   const handleToogle = useCallback(()=>{
     toggleTodo(todo.id)
   }, []);
   const handleDelete = useCallback(()=>{
     deleteTodo(todo.id)
   }, []);
   //{} == interpolacion
  //FRAGMENT CONTENEDOR
  return (
    <>
    <div className={`todo-item todo-item--${theme}`}>
        <button className={'todo-item__checkbox'} onClick={handleToogle}><Check color="green" size={12} /></button>
        <span className='todo-item__text'>
            {todo.text}
        </span>
        <button className='todo-item__delete' onClick={handleDelete}><Trash2 color="red" size={12} /></button>
    </div>
    </>
  )
}
