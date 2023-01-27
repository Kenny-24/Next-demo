import MovieCard from './MovieCard';
export default async function Movies() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}`,
    { next: { revalidate: 1000 } },
  );
  const res = await data.json();
  return (
    <main className="grid gap-16 grid-cols-fluid ">
      {res.results.map((movie: any) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
      ))}
    </main>
  );
}
