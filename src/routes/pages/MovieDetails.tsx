import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import Modal from '@/components/Modal'

export interface MovieDetails {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
export interface Rating {
  Source: string
  Value: string
}

// http://localhost:5173/movies/tt0413300

export default function MovieDetails() {
  const navigate = useNavigate()
  const { movieId } = useParams()
  const [movie, setMovie] = useState<MovieDetails | null>(null)

  useEffect(() => {
    async function fetchMovieDetails() {
      const res = await fetch(
        `https://omdbapi.com?apikey=7035c60c&i=${movieId}`
      )
      const movie: MovieDetails = await res.json()
      setMovie(movie)
    }
    fetchMovieDetails()
  }, [movieId])

  return (
    <Modal onClose={() => navigate('/movies')}>
      {movie && (
        <>
          <h1 className="text-[60px]">{movie.Title}</h1>
          <img
            src={`https://img.omdbapi.com?apikey=7035c60c&i=${movieId}&h=1234`}
            alt={movie.Title}
          />
          <p>{movie.Director}</p>
          <p>{movie.Actors}</p>
          <p>{movie.Plot}</p>
          <ul>
            {movie.Ratings.map(rating => {
              return (
                <li key={rating.Source}>
                  {rating.Source} - {rating.Value}
                </li>
              )
            })}
          </ul>
        </>
      )}
    </Modal>
  )
}
