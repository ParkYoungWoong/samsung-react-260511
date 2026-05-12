import B from './B'
import { ColorProvider } from '@/contexts/color/provider'

export default function A() {
  return (
    <ColorProvider color="black">
      <h1>A</h1>
      <B />
    </ColorProvider>
  )
}
