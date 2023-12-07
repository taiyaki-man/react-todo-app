"use client";
import React, { useState, useRef } from "react";
import TodoList from "../components/TodoList";
import Button from "../components/Button";
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

  //const Button  

  return (
<<<<<<< HEAD
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
=======
    <div className="bg-yellow-200 justify-center  items-center min-h-screen " >
      <nav  className = " py-60">
        <div className = "flex  justify-center mb-4">
          <input className="bg-green-300 hover:bg-green-500 duration-300 mr-2" type='text' ref={todoRef} />
          <Button onClick ={handleAddTodo}>タスク追加</Button>
        </div>
        <div className="flex flex-col items-center">
          <TodoList todos={todos} toggleTodos={toggleTodos} />
        </div>
        <div className = "flex justify-center py-6">
           <Button  onClick ={handleClear}>完了したタスクの削除</Button> 
        </div>
        
        <div className="text-1xl text-red-700 text-center">残りのタスク:{todos.filter((todo) => !todo.done).length}</div>
      </nav>
  
    </div>
>>>>>>> origin/kanazawa_update
  );
};
