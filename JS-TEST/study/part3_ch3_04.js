// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
console.log('part3_ch3_04')
console.log('')
const a = 7
double()

/* 아래는 함수선언. 자바스크립트는 일반적으로 위에서 아래로 재생되며,
   함수표현을 사용하면, 함수를 아래에 선언한 경우 에러가 발생한다.
   함수선언으로 표현하고, 함수를 아래에 선언하면 정상적으로 동작한다. */
// const double = function () {
//   console.log(a * 2)
// }
function double() {
  console.log(a * 2)
}

console.log('')
console.log('')
console.log('')