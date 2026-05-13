import SearchBar from '@/components/movies/SearchBar'
import MovieList from '@/components/movies/MovieList'
import { useCountStore } from '@/stores/count'

export default function App() {
  const count = useCountStore(s => s.count)
  const increase = useCountStore(s => s.increase)
  return (
    <>
      <SearchBar />
      <MovieList />
      <h1 onClick={increase}>{count}</h1>
    </>
  )
}
