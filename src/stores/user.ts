import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

create(
  immer(
    combine(
      {
        user: {
          name: 'HEROPY',
          age: 22,
          address: {
            city: 'Suwon',
            emails: ['thesecon@gmail.com', 'neo@zillinks.com']
          }
        }
      },
      set => ({
        setUserFirstEmail(newEmail: string) {
          // user.address.emails[0] = newEmail
          set(state => {
            state.user.address.emails[0] = newEmail
          })
          // const { user } = get()
          // set({
          //   user: {
          //     ...user,
          //     address: {
          //       ...user.address,
          //       emails: [newEmail, user.address.emails[1]]
          //     }
          //   }
          // })
        }
      })
    )
  )
)
