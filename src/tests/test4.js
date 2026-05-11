// 호이스팅!

hello() // ✅
world() // ❌
good() // ❌

function hello() {
  console.log('Hello')
}

const world = () => {
  console.log('World')
}

const good = function () {
  console.log('Good')
}
