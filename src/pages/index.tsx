import React, { useState, useRef } from "react";
import Todolist from "../components/Todolist";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  id: string;
  name: string;
  done: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([{ id: uuidv4(), name: 'タスク1', done: false }]);

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
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    if (todo) {
      todo.done = !todo.done;
      setTodos(newTodos);
    }
  };

  return (
    <div>
      <Todolist todos={todos} toggleTodos={toggleTodos} />
      <input type='text' ref={todoRef} />
      <button onClick={handleAddTodo}>タスク追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.done).length}</div>
    </div>
  );
};

// export default App;
