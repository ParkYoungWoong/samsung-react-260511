import { useEffect, useRef } from 'react'

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // 깃헙에 푸시했어요~😘
  return (
    <>
      <input
        type="text"
        ref={inputRef}
      />
    </>
  )
}
