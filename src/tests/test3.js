console.log(false && true) // false
console.log(1 && 123) // 123
console.log(1 && '' && 123) // ???

function useEffect(cb, b) {
  setTimeout(cb, 1000)
  return 123
}

useEffect(() => {}, [])
