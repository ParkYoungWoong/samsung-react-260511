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
      title: ''
    },
    (set, get) => ({
      setTitle(title: string) {
        // set({ title: title })
        set({ title })
      },
      async fetchTodos() {
        const { data } = await api.get('')
        set({
          todos: data || []
        })
      },
      async createTodo() {
        const { title } = get()
        if (!title.trim()) return
        const todo = await api.post('', { title })
      }
    })
  )
)
