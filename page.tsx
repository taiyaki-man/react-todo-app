import React, { useState, useRef } from "react";
import TodoList from "../components/TodoList";
import { TypeTodo } from "../types/TypeTodo";
import { v4 as uuidv4 } from "uuid";



export default function Home() {
  const [todos, setTodos] = useState<TypeTodo[]>([]);

  const todoRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    if (todoRef.current) {
      const name = todoRef.current.value;
      setTodos((prevTodos) => {
        return [...prevTodos, { id: uuidv4(), name: name, done: false }];
      });
      todoRef.current.value = '';
    }
  };

  const toggleTodos = (id: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.done);
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoList todos={todos} toggleTodos={toggleTodos} />
      <input type='text' ref={todoRef} />
      <button onClick={handleAddTodo}>タスク追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.done).length}</div>
    </div>
  );
};

// export default App;
