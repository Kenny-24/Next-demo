import { Todo } from 'typings';
import { notFound } from 'next/navigation';

// 默认服务端渲染
export const dynamicParams = true;

type PageProps = {
  params: {
    todoId: string;
  };
};
const fetchTodos = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    // 缓存 60s后失效 之后重新验证缓存
    { next: { revalidate: 60 } },
  );
  const todo: Todo = await res.json();
  return todo;
};
export default async function TodoPge({ params: { todoId } }: PageProps) {
  const todo = await fetchTodos(todoId);
  if (!todo.id) {
    return notFound();
  }

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

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos: Todo[] = await res.json();
  const trimmedTodos = todos.splice(0, 10);
  // be string
  // fallback: 'blocking' 默认不会更新已经生成的页面
  // 前十个的访问会很快 因为被缓存起来了 其他将会在服务端渲染再返回（慢一些）
  // 默认会动态缓存静态页面 访问访问过的页面会很快 60s后动态缓存失效 会重新验证缓存
  return trimmedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}

// getStaticProps相关知识 https://www.jianshu.com/p/7e93c5dc1403
