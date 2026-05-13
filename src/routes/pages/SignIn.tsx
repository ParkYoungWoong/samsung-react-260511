import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useNavigate } from 'react-router'

export default function SignIn() {
  const navigate = useNavigate()

  function signIn() {
    // 서버로 전송 => 로그인 승인/확인 => 정상 응답
    // 메인 페이지로 이동
    navigate('/')
  }

  return (
    <>
      <h1>Log In Page!</h1>
      <form
        className="flex max-w-[300px] flex-col gap-2"
        onSubmit={e => e.preventDefault()}>
        <TextField label="ID" />
        <TextField label="PW" />
        <Button onClick={() => signIn()}>로그인</Button>
      </form>
    </>
  )
}
