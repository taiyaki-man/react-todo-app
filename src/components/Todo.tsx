import React from 'react';
import { TypeTodo } from '../types/TypeTodo';

interface TodoProps {
  todo: TypeTodo;
  toggleTodos: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, toggleTodos }) => {
  const handleTodoClick = () => {
    toggleTodos(todo.id);
  };

  return (
    <div>
      <label>
        <input
          type='checkbox'
          checked={todo.done}
          readOnly
          onChange={handleTodoClick}
        />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
