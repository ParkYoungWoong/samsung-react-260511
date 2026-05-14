import { useMovieStore } from '@/stores/movie'

export default function SearchBar() {
  const searchText = useMovieStore(s => s.searchText)
  const setSearchText = useMovieStore(s => s.setSearchText)
  const fetchMovies = useMovieStore(s => s.fetchMovies)

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
        onKeyDown={event => {
          if (event.nativeEvent.isComposing) return
          if (event.key === 'Enter') fetchMovies()
        }}
      />
      <button onClick={() => fetchMovies()}>검색</button>
    </div>
  )
}
