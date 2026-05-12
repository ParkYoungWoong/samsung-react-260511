import A from '@/components/drillings/A'
import { useColorStore } from '@/stores/color'

export default function App() {
  const color = useColorStore(s => s.color)
  return (
    <>
      <h1>App: {color}</h1>
      <A />
    </>
  )
}
