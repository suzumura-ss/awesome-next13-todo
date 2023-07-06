'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@src/db';

export async function getTodos() {
  return await prisma.toDo.findMany();
}

export async function createTodo(data: FormData) {
  const title = data.get('title')?.valueOf();
  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('Title is required');
  }
  await prisma.toDo.create({ data: { title, completed: false } });
  redirect('/');
}

export async function toggleTodo(id: string, completed: boolean) {
  await prisma.toDo.update({ where: { id }, data: { completed } });
}
