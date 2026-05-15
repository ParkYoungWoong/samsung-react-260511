import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

interface Todo {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}

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
      isLoading: false
    },
    (set, get) => {
      function setTitle(title: string) {
        // set({ title: title })
        set({ title })
      }
      async function fetchTodos() {
        const { data } = await api.get('')
        set({
          todos: data || []
        })
      }
      async function createTodo() {
        const { title } = get()
        if (!title.trim()) return
        try {
          set({ isLoading: true }) // 로딩 시작
          await api.post('', { title })
          setTitle('')
          await fetchTodos()
        } catch (error) {
          console.log('생성 에러:', error)
        } finally {
          set({ isLoading: false }) // 로딩 종료
        }
      }
      return {
        setTitle,
        fetchTodos,
        createTodo
      }
    }
  )
)
