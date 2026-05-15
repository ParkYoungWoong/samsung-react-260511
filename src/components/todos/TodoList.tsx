import { useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'

export default function TodoList() {
  const todos = useTodoStore(s => s.todos)
  const fetchTodos = useTodoStore(s => s.fetchTodos)

  useEffect(() => {
    fetchTodos()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {todos.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </>
  )
}
