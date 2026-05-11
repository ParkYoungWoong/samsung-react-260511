import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  // const [active, setActive] = useState('active')
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <h1 className={isActive ? 'active' : ''}>{count}</h1>
      <button
        onClick={() => {
          setIsActive(!isActive)
        }}>
        토글
      </button>
      <input
        type="number"
        value={count}
        onChange={event => {
          setCount(Number(event.target.value))
        }}
      />
      <button
        onClick={() => {
          const value = count + 1
          setCount(value)
          console.log(value)
        }}>
        클릭
      </button>
    </>
  )
}
