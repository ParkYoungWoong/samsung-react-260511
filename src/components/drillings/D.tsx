import { useColor } from '@/contexts/color/value'

export default function D() {
  const color = useColor()
  return (
    <>
      <h1>D: {color}</h1>
    </>
  )
}
