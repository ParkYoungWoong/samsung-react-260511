import { redirect } from 'react-router'
import { validateUser } from '@/utils'

interface Context {
  request: Request
}

export default function requiresAuth({ request }: Context) {
  const url = new URL(request.url) // 'http:://localhost:5173/movies'
  if (validateUser()) {
    return true
  }
  return redirect(`/signin?returnUrl=${url.pathname}`)
}
