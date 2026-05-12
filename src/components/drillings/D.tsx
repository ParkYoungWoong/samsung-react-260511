import { useColorStore } from '@/stores/color'

export default function D() {
  const color = useColorStore(s => s.color)
  return (
    <>
      <h1>D: {color}</h1>
    </>
  )
}
