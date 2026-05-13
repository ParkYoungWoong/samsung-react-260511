import { create } from 'zustand'
import { combine } from 'zustand/middleware'

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

create(
  combine(
    {
      movies: [] as Movie[],
      searchText: ''
    },
    (set, get) => ({
      // fetchMovies: async function () {}
      async fetchMovies() {
        const { searchText } = get()
        if (searchText.trim().length < 3) return
        const res = await fetch(
          `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
        )
        const data: ResponseValue = await res.json()
        set({
          movies: data.Search
        })
      }
    })
  )
)
