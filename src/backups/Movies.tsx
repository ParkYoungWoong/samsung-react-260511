import { useState, useEffect } from 'react'

interface Movie {
  imdbID: string
  Title: string
}

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([])

  // 최초 1번만 실행하기
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch('https://omdbapi.com?apikey=7035c60c&s=spider')
      const data = await res.json()
      setMovies(data.Search)
    }
    fetchMovies()
  }, [])

  return (
    <>
      {movies.map(movie => (
        <div key={movie.imdbID}>{movie.Title}</div>
      ))}
    </>
  )
}
