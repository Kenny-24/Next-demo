const getMovie = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}`,
    {
      method: 'GET',
      credentials: 'include',
    },
  );
  const movie = await res.json();
  return movie;
};

export default async function MoviesList() {
  const movies = await getMovie();

  return (
    <>
      {movies}
      {/* {movies.map((todo) => (
        <p key={todo.id} className="text-purple-400 text-center text-3xl">
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))} */}
    </>
  );
}
