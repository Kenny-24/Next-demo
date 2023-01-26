import Image from 'next/image';
export default async function Movies() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}`,
  );
  const res = await data.json();
  const imgPath = 'https://image.tmdb.org/t/p/original';
  return (
    <main className="flex flex-wrap">
      {res.results.map((movie: any) => (
        <Image
          key={movie.id}
          className=" rounded-3xl"
          width={400}
          height={400}
          quality={100}
          src={imgPath + movie.poster_path}
          alt={''}
        />
      ))}
    </main>
  );
}
