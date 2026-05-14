import { redirect } from 'react-router'

interface Context {
  request: Request
}

function validateUser() {
  const accessToken = localStorage.getItem('samsung_token')
  // 토큰 분석...
  const isValid = !!accessToken // 인증 여부 확인
  return isValid
}

export async function requiresAuth({ request }: Context) {
  // request.url // http:://localhost:5173/movies
  if (validateUser()) {
    return true
  }
  return redirect('/signin')
}
