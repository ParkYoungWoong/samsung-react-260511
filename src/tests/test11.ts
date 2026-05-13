const boxEl = document.querySelector('.box')

console.log(boxEl!.classList)

// let a: string | number = '123'
// a = 789

// 타입 단언(Assertion)
// 개발자(사람)가 TS에게 확실하게 딱 잘라서 정확하게 얘기하는 것
// 1) 데이터 as 타입
// 2) 데이터!

const age = 22
const user = {
  name: 'HEROPY',
  age
}
console.log(user)
