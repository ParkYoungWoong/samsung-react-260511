import type { User } from './test5.ts'

const user: User = {
  name: 'Neo',
  age: 11,
  emails: []
}
console.log(user)

function add<T>(a: T, b: T): T {
  // @ts-expect-error - 반환 타입 문제는 무시
  return a + b
}

add(1, 2)
add('ab', 'cd')
// add('cd', 1) // '1cd'
