import Link from 'next/link';
import React from 'react';
import TodoItem from './components/TodoItem';
import { getTodos, toggleTodo } from '@backend/todo';

export default async function Home() {
  const todos = await getTodos();
  // await prisma.toDo.create({
  //   data: {
  //     title: 'My first todo',
  //     completed: false,
  //   },
  // });

  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>ToDos</h1>
        <Link
          className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
          href='/new'
        >
          New
        </Link>
      </header>
      <ul className='pl-4'>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
