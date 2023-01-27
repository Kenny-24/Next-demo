import Link from 'next/link';
import { Todo } from 'typings';
const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos: Todo[] = await res.json();
  const newTodo = todos.splice(0, 10);
  return newTodo;
};

export default async function TodosList() {
  const todos = await fetchTodos();

  return (
    <>
      <main>
        {todos.map((todo) => (
          <p key={todo.id} className="text-purple-400 text-center text-3xl">
            <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
          </p>
        ))}
      </main>
    </>
  );
}
