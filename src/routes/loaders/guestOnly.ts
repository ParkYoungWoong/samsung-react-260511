import { redirect } from 'react-router'
import { validateUser } from '@/utils'

export function guestOnly() {
  if (validateUser()) {
    return redirect('/')
  }
  return true
}
