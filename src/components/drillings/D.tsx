import { useContext } from 'react'
import { ColorContext } from '@/App'

export default function D() {
  const color = useContext(ColorContext)
  return (
    <>
      <h1>{color}</h1>
    </>
  )
}
