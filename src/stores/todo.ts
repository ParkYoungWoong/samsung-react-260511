import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

export interface Todo {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}

// '/abc123'

const api = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
  headers: {
    'content-type': 'application/json',
    apikey: 'KDT8_bcAWVpD8',
    username: 'KDT8_ParkYoungWoong'
  }
})

export const useTodoStore = create(
  combine(
    {
      todos: [] as Todo[],
      title: '',
      isLoadingForFetch: false,
      isLoadingForCreate: false
    },
    (set, get) => {
      function setTitle(title: string) {
        // set({ title: title })
        set({ title })
      }
      async function fetchTodos() {
        try {
          set({ isLoadingForFetch: true })
          const { data } = await api.get('')
          set({
            todos: data || []
          })
        } catch (error) {
          console.log('가져오기 에러:', error)
        } finally {
          set({ isLoadingForFetch: false })
        }
      }
      async function createTodo() {
        const { title } = get()
        if (!title.trim()) return
        try {
          set({ isLoadingForCreate: true }) // 로딩 시작
          await api.post('', { title })
          setTitle('')
          fetchTodos()
        } catch (error) {
          console.log('생성 에러:', error)
        } finally {
          set({ isLoadingForCreate: false }) // 로딩 종료
        }
      }
      async function updateTodo(todo: Todo) {
        await api.put(`/${todo.id}`, {
          title: todo.title,
          done: todo.done
        })
        fetchTodos()
      }
      return {
        setTitle,
        fetchTodos,
        createTodo,
        updateTodo
      }
    }
  )
)
