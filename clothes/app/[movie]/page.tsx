import Image from 'next/image';

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}`,
  );
  const res = await data.json();
  return res.results.map((movie: any) => ({
    movie: String(movie.id),
  }));
}

export default async function MovieDetail({ params }: any) {
  const { movie } = params;
  const imgPath = 'https://image.tmdb.org/t/p/original';
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.MOVIE_API_KEY}`,
  );
  const res = await data.json();
  return (
    <div className="px-20 pb-20">
      <h2 className="text-2xl">{res.title}</h2>
      <h2 className="text-lg">{res.release_date}</h2>
      <h2>Runtime: {res.runtime} minutes</h2>
      <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">
        {res.status}
      </h2>
      <Image
        className="my-12 w-full"
        src={imgPath + res.backdrop_path}
        width={1000}
        height={1000}
        alt={''}
      />
      <p>{res.overview}</p>
    </div>
  );
}
