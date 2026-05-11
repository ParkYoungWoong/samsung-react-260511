import { useState } from 'react'

export default function App() {
  // let count = 0
  const [count, setCount] = useState(0)
  // const count = state[0] // Getter
  // const setCount = state[1] // Setter

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1)
          console.log(count)
        }}>
        클릭
      </button>
    </>
  )
}
