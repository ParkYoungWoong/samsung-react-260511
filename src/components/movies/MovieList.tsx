import { Fragment } from 'react'
import { useMovieStore } from '@/stores/movie'

export default function MovieList() {
  const movies = useMovieStore(s => s.movies)
  return (
    <>
      {movies.map(movie => (
        <Fragment key={movie.imdbID}>
          <div>{movie.Title}</div>
          <img
            src={movie.Poster}
            alt={movie.Title}
          />
        </Fragment>
      ))}
    </>
  )
}
