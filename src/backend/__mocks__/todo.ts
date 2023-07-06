// import { redirect } from 'next/navigation';

const Todo: Array<{
  id: string;
  title: string;
  completed: boolean;
}> = [];

export async function getTodos() {
  return Todo;
}

export async function createTodo(data: FormData) {
  const title = data.get('title')?.valueOf();
  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('Title is required');
  }
  // await prisma.toDo.create({ data: { title, completed: false } });
  Todo.push({ id: String(Todo.length), title, completed: false });
  // redirect('/');
  window.location.href = '/';
}

export async function toggleTodo(id: string, completed: boolean) {
  // await prisma.toDo.update({ where: { id }, data: { completed } });
  const todo = Todo.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = completed;
  }
}
