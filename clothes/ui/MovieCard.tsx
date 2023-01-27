import Image from 'next/image';
import Link from 'next/link';
interface Props {
  title: string;
  id: number;
  poster_path: String | null;
  release_date: string;
}
const MovieCard: React.FC<Props> = ({
  title,
  id,
  poster_path,
  release_date,
}) => {
  const imgPath = 'https://image.tmdb.org/t/p/original';

  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imgPath + poster_path}
          width={400}
          className=" rounded-3xl"
          quality={100}
          height={400}
          alt={title}
        />
      </Link>
    </div>
  );
};
export default MovieCard;
