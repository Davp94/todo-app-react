import { useCallback, useState } from 'react'

import './App.css'
import type { Todo } from '../../types/todo';
import { useTheme } from '../../hooks/use-theme';
import { useTodoStore } from '../../hooks/use-todo';
import { Check, Trash2 } from 'lucide-react';

export const TodoItem: React.FC<{todo: Todo}> ({todo}) => {
   const { theme } = useTheme();
   const { toogleTodo, deleteTodo } = useTodoStore();
   
   const handleToogle = useCallback(()=>{
     toogleTodo(todo.id)
   }, []);
   const handleDelete = useCallback(()=>{
     deleteTodo(todo.id)
   }, []);

  //FRAGMENT CONTENEDOR
  return (
    <div className='todoitem'>
        <button className='todoitem_button' onClick={handleToogle}><Check color="green" size={12} /></button>
        <span className='todoitem_text' >
            {todo.text}
        </span>
        <button className='todoitem_button' onClick={handleDelete}><Trash2 color="red" size={12} /></button>
    </div>
  )
}
