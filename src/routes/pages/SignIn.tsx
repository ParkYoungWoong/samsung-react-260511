import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useNavigate } from 'react-router'
import { useState } from 'react'

export default function SignIn() {
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  function signIn() {
    // 로그인 성공 시 처리!
    // 서버로 ID/PW 전송 => ID/PW 검사 => 로그인 승인 => 정상 응답(사용자 정보 + 액세스 토큰)
    if (id && pw) {
      // 로그인 완료 가정!
      const accessToken =
        '사용자이름:박영웅,나이:85,이메일:abc@xyz.com,사진:https://...' // 서버에서 응답 받은 토큰 정보
      localStorage.setItem('samsung_token', accessToken) // 토큰 저장
      navigate('/') // 로그인 완료 후 메인 페이지로 이동
    }

    // 로그인 실패 시 처리
    // ...
  }

  return (
    <>
      <h1>Log In Page!</h1>
      <form
        className="flex max-w-[300px] flex-col gap-2"
        onSubmit={e => e.preventDefault()}>
        <TextField
          label="ID"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <TextField
          label="PW"
          type="password"
          value={pw}
          onChange={e => setPw(e.target.value)}
        />
        <Button onClick={() => signIn()}>로그인</Button>
      </form>
    </>
  )
}
