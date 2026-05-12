import Parent from './Parent.tsx'

export default function Child() {
  const abc = 123
  return (
    <>
      <Parent
        title={abc}
        name={'World'}
        onClick={() => console.log('Hello')}
      />
    </>
  )
}
