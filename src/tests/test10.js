const counts = {
  count: 0,
  double: 0
}

function combine(counts) {
  console.log(counts.double)
}

combine(counts)
combine({
  count: 0,
  double: 0
})

function a() {
  return { x: 1 }
}
const b = () => {
  return { x: 1 }
}
const c = () => ({ x: 1 })
