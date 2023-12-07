import React from 'react';
import { TypeTodo } from '../types/TypeTodo';


interface ButtonProps {
    onClick: () => void;
    children?: React.ReactNode;
}

const Button  = ({ onClick, children }:ButtonProps) => {
  return (
    <button onClick={onClick} className=' rounded-md hover:ease-in-out duration-300 bg-blue-600 text-white '>
      {children}
    </button>
  )

} ;



export default Button;