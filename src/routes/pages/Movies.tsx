import SearchBar from '@/components/movies/SearchBar'
import MovieList from '@/components/movies/MovieList'
import { Outlet } from 'react-router'

export default function App() {
  return (
    <>
      <SearchBar />
      <MovieList />
      <Outlet />
    </>
  )
}
