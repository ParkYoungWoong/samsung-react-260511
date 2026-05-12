import TextField from '@/components/TextField'
import Button from '@/components/Button'

export default function App() {
  return (
    <>
      <TextField
        label="이메일"
        type="email"
      />
      <TextField
        label="비밀번호"
        type="password"
      />
      <Button onClick={() => {}}>로그인</Button>
      <button>별개 버튼</button>
    </>
  )
}
