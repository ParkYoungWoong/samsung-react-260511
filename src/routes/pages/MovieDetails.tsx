import { useParams } from 'react-router'

// http://localhost:5173/movies/tt0413300

export default function MovieDetails() {
  const { movieId } = useParams()
  console.log('movieId:', movieId)
  return <></>
}
