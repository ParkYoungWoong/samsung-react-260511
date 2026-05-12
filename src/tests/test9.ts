export interface Person {
  name: string
}
export interface User extends Person {
  isValid: boolean
}

export const user: User = {
  name: 'HEROPY',
  isValid: false
}
