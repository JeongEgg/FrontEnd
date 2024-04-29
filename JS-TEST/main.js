// import getType from "./getType"

// console.log(typeof 'Hello world!')
// console.log(typeof 123)
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof {})
// console.log(typeof [])

// console.log(getType(123))
// console.log(getType(false))
// console.log(getType(null))
// console.log(getType({}))
// console.log(getType([]))

// // 산술 연산자

// // 할당 연산자
// let a = 6
// a /= 3
// console.log(a)

// // 비교 연산자
// const b = 1
// const c = 3

// console.log(b === c)

// function isEqual(x, y) {
//   return x === y
// }

// console.log(isEqual(1,1))
// console.log(isEqual(2, '2')) // 데이터 타입이 다르다.

// console.log(b !== c)
// console.log(b < c)
// console.log(b > c)


// // 논리 연산자
// const d = 1 === 1
// const e = 'AB' === 'AB'
// const f = true

// console.log('d: ',d)
// console.log('e: ',e)
// console.log('f: ',f)

// console.log('&&: ', d && e && f)
// console.log('||: ', d || e || f)
// console.log('!: ', !d)


// // 삼항 연산자
// const g = 1 < 2
// if (g) {
//   console.log('참')
// }else {
//   console.log('거짓')
// }

// console.log(a ? '참' : '거짓')


// import random from './getRandom'

// const a = random()

// // 조건문 switch 
// switch (a) {
//   case 0:
//     console.log('a is 0')
//     break
//   case 2:
//     console.log('a is 2')
//     break
//   case 4:
//     console.log('a is 4')
//     break
//   default:
//     console.log('rest...')
// }

// // 조건문 if else
// if(a === 0){
//   console.log('a is 0')
// }else if (a === 2) {
//   console.log('a is 2')
// }else if (a === 4) {
//   console.log('a is 4')
// }else {
//   console.log('rest...')
// }


// // 반복문 for
// const ulEl = document.querySelector('ul')

// for (let i = 0; i < 10; i += 1){
//   const li = document.createElement('li')
//   li.textContent = `list-${i + 1}`

//   if ((i + 1) % 2 === 0){
//     // 짝수인 li 태그를 클릭할 때 콘솔 출력
//     li.addEventListener('click', function () {
//       console.log(li.textContent)
//     })
//   }
//   ulEl.appendChild(li)
// }


// 변수 유효범위 var, let, const
// const, let -> 블록레벨의 유효범위를 가진다.
// var -> 함수레벨의 유효범위를 가진다. 메모리 누수의 문제가 발생할 수 있음.
// function scope(){
//   if(true){
//     const a = 123
//     console.log(a)
//   }
// }
// scope()


// // 형 변환
// const a = 1
// const b = '1'
// console.log(a == b)
// // 동등연산자(==)가 아닌 비교연산자(===)를 사용할 것.
// if ('false') {
//   console.log(123)
// }

// // Truty(참 같은 값)
// // true, {}, [], 1, 2, 'false', -12, '3.14' ...

// // Falsy(거짓 같은 값)
// // false, '', null, undefined, 0, -0, NaN


// // 함수 복습
// function sum(x,y) {
//     return x + y;
// }
// console.log(sum(7,3))







