import type { User } from './test5.ts'

const user: User = {
  name: 'Neo',
  age: 11,
  emails: []
}
console.log(user)

function add<T>(a: T, b: T) {
  return a + b
}

add(1, 2)
add('ab', 'cd')
add('cd', 1) // '1cd'
