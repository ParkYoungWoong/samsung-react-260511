import { useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'
import Loader from '@/components/Loader'
import TodoItem from '@/components/todos/TodoItem'

export default function TodoList() {
  const todos = useTodoStore(s => s.filteredTodos)
  const isLoading = useTodoStore(s => s.isLoadingForFetch)
  const fetchTodos = useTodoStore(s => s.fetchTodos)

  useEffect(() => {
    fetchTodos()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
      {isLoading && (
        <Loader
          size={100}
          weight={6}
        />
      )}
    </>
  )
}
