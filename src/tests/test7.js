// ... 전개연산자(Spread Operator)

const array = [9, 22, 13, 4, 105, 6]
const newArray1 = [...array, 9999]
// const newArray1 = [9, 22, 13, 4, 105, 6, 9999]

const object = {
  name: 'HEROPY',
  age: 85,
  isValid: true
}
const newObject1 = { ...object, email: 'thesecon@gmail.com' }
// const newObject1 = { name: 'HEROPY', age: 85, isValid: true }

// 나머지 매개변수(Rest Parameter)
function hello(a, b, ...rest) {
  console.log(a, b)
  console.log(rest) // [3, 4, 5, 6]
}
hello(1, 2, 3, 4, 5, 6)
