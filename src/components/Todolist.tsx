import React from 'react';
import Todo from './Todo';
import { TypeTodo } from '../types/TypeTodo';

interface TodoListProps {
  todos: TypeTodo[];
  toggleTodos: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodos }) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodos={toggleTodos} />);
};

export default TodoList;
//ファイル名変えた//