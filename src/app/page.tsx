"use client";
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
    if (name === '') return;
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
  <div >
    <header className="bg-blue-400 p-3">
      <nav className="flex justify-between container mx-auto">
        <div className="text-xl ">Enjoy Todo App!</div>
        <div className="space-x-5">
          <a className=" hover:text-red-700 ease-in-out duration-300">ホーム</a>
          <a className=" hover:text-red-700 ease-in-out duration-300">vlog</a>
          <a className=" hover:text-red-700 ease-in-out duration-300">問い合わせ</a>
        </div>
      </nav>
    </header>
    <main>
      <div className="todo-bg min-h-screen bg-cover object-cover">
        <div className="containaer mx-auto max-w-md text-center font-mono text-xl decoration-slate-700 p-6">
     
          <TodoList todos={todos} toggleTodos={toggleTodos} />
          <input type='text' ref={todoRef} />
          <button onClick={handleAddTodo}>タスク追加</button>
          <button onClick={handleClear}>完了したタスクの削除</button>
          <div>残りのタスク:{todos.filter((todo) => !todo.done).length}</div>
        </div>
      </div>
    </main>
    
      
  </div>
  );
};
