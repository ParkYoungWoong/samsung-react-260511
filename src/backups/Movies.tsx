import { useState, useEffect, Fragment } from 'react'

export interface ResponseValue {
  Search: Movie[]
  totalResults: string
  Response: string
}
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([])

  // 최초 1번만 실행하기
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch('https://omdbapi.com?apikey=7035c60c&s=spider')
      const data: ResponseValue = await res.json()
      setMovies(data.Search)
    }
    fetchMovies()
  }, [])

  useEffect(() => {
    console.log('Movies 배열이 변경되었습니다!', movies)
  }, [movies])

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
