// 구조 분해 할당 문법

const numbers = [7, 10, 20, 1, 99]

// const a = numbers[0]
// const b = numbers[3]
const [a, b] = numbers
console.log(a, b) // 7 10

const user = {
  name: 'Heropy',
  age: 85,
  emails: ['thesecon@gmail.com', 'neo@zillinks.com']
}

// const age = user.age
// const email = user.emails[0]
// const { age, emails } = user
// const [email] = emails
// console.log(age, email) // 85 'thesecon@gmail.com'

const {
  age: x,
  emails: [email]
} = user
console.log(x, email) // 85 'thesecon@gmail.com'
