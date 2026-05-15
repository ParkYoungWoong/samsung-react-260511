import type { Todo } from '@/stores/todo'
import { useState } from 'react'

interface Props {
  todo: Todo
}

export default function TodoItem({ todo }: Props) {
  const [isEditMode, setIsEditMode] = useState(false)

  function onEditMode() {
    setIsEditMode(true)
  }
  function offEditMode() {
    setIsEditMode(false)
  }

  return (
    <div className="flex items-center gap-2">
      {isEditMode ? (
        // 수정 모드
        <>
          <input type="checkbox" />
          <input type="text" />
          <button>취소</button>
          <button>저장</button>
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
