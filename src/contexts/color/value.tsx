import { createContext, useContext } from 'react'

export const ColorContext = createContext('red')

export function useColor() {
  return useContext(ColorContext)
}
