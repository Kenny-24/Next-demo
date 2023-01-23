import { Todo } from 'typings';

type PageProps = {
  params: {
    todoId: string;
  };
};
const fetchTodos = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
  );
  const todo: Todo = await res.json();
  return todo;
};
export default async function TodoPge({ params: { todoId } }: PageProps) {
  const todo = await fetchTodos(todoId);
  return (
    <div className="bg-yellow-100 text-purple-400 text-center m-10 p-10 text-xl ">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
}
