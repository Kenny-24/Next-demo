import Link from 'next/link';
import { Todo } from 'typings';
const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos: Todo[] = await res.json();
  return todos;
};

export default async function TodosList() {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id} className="text-purple-400 text-center pt-10 text-3xl">
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  );
}
