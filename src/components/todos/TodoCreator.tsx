import { useTodoStore } from '@/stores/todo'
import TextField from '@/components/TextField'
import Button from '@/components/Button'

export default function TodoCreator() {
  const title = useTodoStore(s => s.title)
  const isLoading = useTodoStore(s => s.isLoading)
  const setTitle = useTodoStore(s => s.setTitle)
  const createTodo = useTodoStore(s => s.createTodo)

  return (
    <div className="flex gap-2">
      <TextField
        disabled={isLoading}
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={e => {
          // if (e.isComposing) return // 일반적인 JavaScript
          if (e.nativeEvent.isComposing) return // 오직 React
          if (e.key === 'Enter') createTodo()
        }}
        placeholder="할 일을 입력하세요~😘"
      />
      <Button
        disabled={isLoading}
        onClick={() => createTodo()}>
        추가
      </Button>
    </div>
  )
}
