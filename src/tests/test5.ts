// 원시형X, 참조형O => 타입 추론 X
const x: string[] = []

x[0] = '123'

// JS: const|let 변수이름 = 값
// TS: const|let 변수이름: 타입 = 값

export interface User {
  name: string
  age: number
  emails: string[]
  isValid?: boolean
}

const user: User = {
  name: 'HEROPY',
  age: 85,
  emails: ['thesecon@gmail.com']
}
user.isValid = true
