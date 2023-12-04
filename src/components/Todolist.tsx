import React from 'react';
import Todo from './Todo';

interface TodoListProps {
  todos: {
    id: string;
    name: string;
    done: boolean;
  }[];
  toggleTodos: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodos }) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodos={toggleTodos} />);
};

export default TodoList;
