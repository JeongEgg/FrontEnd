// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression
console.log('part3_ch3_03')
console.log('')
const a = 7
function double(){
  console.log(a * 2)
}
double(); 
/* 이 경우, 자바스크립트가 스크립트문을 잘 구분하지 못하여 
   타입 에러가 발생하기 때문에 이 경우에는 
   ;(세미콜론)을 붙여주어야 한다.
*/
(function () {
  console.log(a * 2)
})(); 

(function () {
  console.log(a * 2)
}());

console.log('')
console.log('')
console.log('')