import { useTodoStore } from '@/stores/todo'
import TextField from '@/components/TextField'
import Button from '@/components/Button'

export default function TodoCreator() {
  const title = useTodoStore(s => s.title)
  const setTitle = useTodoStore(s => s.setTitle)

  return (
    <div className="flex gap-2">
      <TextField
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="할 일을 입력하세요~😘"
      />
      <Button>추가</Button>
    </div>
  )
}
