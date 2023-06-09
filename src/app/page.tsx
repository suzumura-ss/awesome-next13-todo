import Link from 'next/link';
import React from 'react';
import { prisma } from '@src/db';
import TodoItem from './components/TodoItem';

async function getTodos() {
  return await prisma.toDo.findMany();
}

async function toggleTodo(id: string, completed: boolean) {
  'use server';
  await prisma.toDo.update({ where: { id }, data: { completed } });
}

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
