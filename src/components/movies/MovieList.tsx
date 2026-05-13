import { useMovieStore } from '@/stores/movie'
import { Link } from 'react-router'

// https://nextjs-movie-app-pi.vercel.app/movies/tt10872600

export default function MovieList() {
  const movies = useMovieStore(s => s.movies)
  return (
    <ul className="flex flex-wrap gap-5">
      {movies.map(movie => (
        <li
          key={movie.imdbID}
          title={movie.Title}
          className="w-[180px]">
          <Link to={`/movies/${movie.imdbID}`}>
            <div className="truncate font-bold">{movie.Title}</div>
            <img
              src={movie.Poster}
              alt={movie.Title}
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}
