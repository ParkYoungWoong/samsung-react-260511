import { useState } from 'react'
import A from '@/components/drillings/A'

export default function App() {
  const [color] = useState('green')
  return (
    <>
      <h1>App.tsx</h1>
      <A />
    </>
  )
}
