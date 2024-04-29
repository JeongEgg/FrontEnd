// 전개 연산자
console.log('part4_ch1_07')
console.log('')
const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(fruits) // 출력 : ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(...fruits) // 출력 : Apple Banana Cherry Orange
// 다음 코드와 동일
// console.log('Apple', 'Banana', 'Cherry', 'Orange')

const toObject = (a, b, ...c) => ({ a, b, c })
// function toObject(a,b, ...c) {
//   // ...c : rest parameter. 각 데이터가 a,b에 순서대로 들어가고, 나머지의 데이터는 모두 c로 들어감
//   return {
//     a, // a: a,
//     b, // b: b,
//     c, // c: c
//     // 축약형 형태(데이터 이름이 같을 때)
//   }
// }
console.log(toObject(...fruits)) // 출력 : {a: 'Apple', b: 'Banana', c: 'Cherry'}
// 다음 코드와 동일(아래와 같은 방식은 불편하다)
// console.log(toObject(fruits3[0], fruits3[1], fruits3[2], fruits3[3])) 

console.log('')
console.log('')
console.log('')