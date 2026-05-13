import { create } from 'zustand'
import {
  combine,
  subscribeWithSelector,
  persist
  // createJSONStorage
} from 'zustand/middleware'

// const customStorage = {
//   getItem() {},
//   setItem() {},
//   removeItem() {}
// }

export const useCountStore = create(
  persist(
    subscribeWithSelector(
      combine(
        {
          count: 0,
          double: 0
        },
        (set, get) => {
          return {
            increase() {
              const { count } = get()
              set({
                count: count + 1
              })
            },
            decrease() {
              set(({ count }) => {
                return {
                  count: count - 1
                }
              })
            }
          }
        }
      )
    ),
    {
      name: 'Count Store',
      version: 1
      // storage: createJSONStorage(() => sessionStorage)
    }
  )
)

useCountStore.subscribe(
  // 선택자 함수
  state => state.count,
  // 실행할 함수
  count => {
    useCountStore.setState({
      double: count * 2
    })
  }
)
