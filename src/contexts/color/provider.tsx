import { ColorContext } from './value'

interface Props {
  children: React.ReactNode
  color: string
}

export function ColorProvider({ children, color }: Props) {
  return <ColorContext.Provider value={color}>{children}</ColorContext.Provider>
}
