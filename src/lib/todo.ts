import { prisma } from '@src/db';

export async function getTodos() {
  return await prisma.toDo.findMany();
}

export async function toggleTodo(id: string, completed: boolean) {
  'use server';
  await prisma.toDo.update({ where: { id }, data: { completed } });
}
