interface Props {
  title: number
  name?: string
  onClick: () => void
}

export default function Parent({ title, name, onClick }: Props) {
  return (
    <>
      <h1>{title}</h1>
      <h2 onClick={() => onClick()}>{name}</h2>
    </>
  )
}
