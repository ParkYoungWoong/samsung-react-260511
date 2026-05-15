import type { Todo } from '@/stores/todo'
import { useState, useRef, useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'

interface Props {
  todo: Todo
}

export default function TodoItem({ todo }: Props) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const inputRef = useRef<HTMLInputElement>(null)
  const updateTodo = useTodoStore(s => s.updateTodo)

  useEffect(() => {
    if (isEditMode) {
      inputRef.current?.focus()
    }
  }, [isEditMode])

  function onEditMode() {
    setIsEditMode(true)
  }
  function offEditMode() {
    setIsEditMode(false)
    setTitle(todo.title)
  }
  function saveTodo() {
    if (!title.trim()) return
    if (title.trim() === todo.title) return
    updateTodo({
      ...todo,
      title,
      done: todo.done
    })
    offEditMode()
  }

  return (
    <div className="flex items-center gap-2">
      {isEditMode ? (
        // 수정 모드
        <>
          <input
            type="checkbox"
            checked={todo.done}
          />
          <input
            ref={inputRef}
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => {
              if (e.nativeEvent.isComposing) return
              if (e.key === 'Enter') saveTodo()
              if (e.key === 'Escape') offEditMode()
            }}
          />
          <button onClick={() => offEditMode()}>취소</button>
          <button onClick={() => saveTodo()}>저장</button>
          <button>삭제</button>
        </>
      ) : (
        // 일반 모드
        <>
          <input
            type="checkbox"
            checked={todo.done}
          />
          <h3 className="grow">{todo.title}</h3>
          <button onClick={() => onEditMode()}>수정</button>
        </>
      )}
    </div>
  )
}
