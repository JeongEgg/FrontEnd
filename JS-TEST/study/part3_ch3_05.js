// 타이머 함수
/* setTimeout(함수, 시간): 일정 시간 후 함수 실행
   setInterval(함수, 시간): 시간 간격마다 함수 실행
   clearTimeout(): 설정된 Timeout 함수를 종료
   clearInterval(): 설정된 Interval 함수를 종료 */

// setTimeout(function () {
//   console.log('Heropy!')
// }, 3000)

// const timer = setTimeout(function () {
//   console.log('Heropy!')
// }, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//   clearTimeout(timer) // timer 실행전 h1 태그를 클릭하면 타이머 함수가 멈춤
// })
console.log('part3_ch3_05')
console.log('')

const timer = setInterval(function () {
  console.log('Heropy!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearInterval(timer) // setInterval 함수 종료
})

console.log('')
console.log('')
console.log('')