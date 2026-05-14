async function add(a: number): Promise<number> {
  return a + 1
}

await add(3) // 4

// class Person {}
// const person: Person = new Person()

function log() {
  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      const value = 123
      resolve(value)
    }, 2000)
  })
  return promise
}
const promise = log()
const value = await promise
console.log(value) // 123

interface User {
  name: string
  age?: number
  isValid?: boolean
}

const user: User = {
  name: 'HEROPY',
  age: 85
}

const { age, isValid = false } = user
console.log(age, isValid) // 85 false
