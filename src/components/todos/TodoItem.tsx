import type { Todo } from '@/stores/todo'
import { useState, useRef, useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'

interface Props {
  todo: Todo
}

export default function TodoItem({ todo }: Props) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const [done, setDone] = useState(todo.done)
  const inputRef = useRef<HTMLInputElement>(null)
  const updateTodo = useTodoStore(s => s.updateTodo)
  const deleteTodo = useTodoStore(function (state) {
    return state.deleteTodo
  })

  useEffect(() => {
    if (isEditMode) {
      inputRef.current?.focus()
    }
  }, [isEditMode])

  useEffect(() => {
    if (done === todo.done) return
    updateTodo({
      ...todo,
      done
    })
    // eslint-disable-next-line
  }, [done])

  function onEditMode() {
    setIsEditMode(true)
  }
  function offEditMode(isSave: boolean = false) {
    setIsEditMode(false)
    if (!isSave) setTitle(todo.title)
  }
  function saveTodo() {
    if (!title.trim()) return
    if (title.trim() === todo.title) return
    updateTodo({
      ...todo,
      title,
      done: todo.done
    })
    offEditMode(true)
  }

  return (
    <div className="flex items-center gap-2 hover:bg-red-500">
      <input
        type="checkbox"
        checked={done}
        onChange={e => setDone(e.target.checked)}
      />
      {isEditMode ? (
        // 수정 모드
        <>
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
          <button onClick={() => deleteTodo(todo)}>삭제</button>
        </>
      ) : (
        // 일반 모드
        <>
          <h3 className="grow">{todo.title}</h3>
          <button onClick={() => onEditMode()}>수정</button>
        </>
      )}
    </div>
  )
}
