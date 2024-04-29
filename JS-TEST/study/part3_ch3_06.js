// 콜백(callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)
console.log('part3_ch3_06')
console.log('')
function timeout(cb) { // timeout 함수의 구현부분
  setTimeout(() => {
    console.log('Heropy')
    cb()
  },3000)
}
timeout(() => {
  console.log('Done!')// 콜백함수 부분
})

console.log('')
console.log('')
console.log('')