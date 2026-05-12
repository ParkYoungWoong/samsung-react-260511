import { useState, createContext } from 'react'
import A from '@/components/drillings/A'

export const ColorContext = createContext('red')

export default function App() {
  const [color] = useState('red')
  return (
    <ColorContext.Provider value={color}>
      <A />
    </ColorContext.Provider>
  )
}
