import { Fragment, useCallback, useState } from "react";

import './TodoApp.css';
import { useTheme } from "../../hooks/use-theme";
import { Plus } from "lucide-react";
import { useTodoStore } from "../../state-management/zustand/todo-store";

const AddTodo = () => {
  const { theme } = useTheme();
  const [text, setText] = useState<string>('');
  const { addTodo } = useTodoStore();

  const handleSubmit = useCallback(() => {
    console.log('SUBMIT FORM', text)
    if(text.trim()){
       addTodo(text.trim());
       setText('')
    }
  }, [text, addTodo])

  const handleKeyDown = useCallback((e: React.KeyboardEvent)=>{
    if(e.key === 'Enter'){
        handleSubmit();
    }
  },[handleSubmit])

  return (
    <>
      <div className={`add-todo add-todo--${theme}`}>
        <div className="add-todo__form">
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Data todo ..."
                className={`add-todo__input add-todo__input--${theme}`}
            />
            <button onClick={handleSubmit} className="add-todo__button"><Plus size={12}/></button>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
