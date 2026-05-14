import { redirect } from 'react-router'

export async function guestOnly() {
  if (validateUser()) {
    return redirect('/')
  }
  return true
}
