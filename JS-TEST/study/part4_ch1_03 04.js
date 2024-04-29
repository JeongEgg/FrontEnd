// JS 데이터(배열)
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
console.log('part4_ch1_03 04')
console.log('')
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers[1])
console.log(fruits[2])
console.log(numbers.length)
console.log(fruits.length)
console.log([1,2].length)

console.log('concat 출력')
console.log(numbers.concat(fruits))
console.log(numbers) // 위에서 concat를 실행하더라도 원본의 데이터는 변형되지 않는다.
console.log(fruits)

console.log('foreach 문')
fruits.forEach(function (element, index, array) {
  console.log(element, index, array)
  // element -> fruit, index -> i로 바꾸어 표현가능.

  /** 출력 :
   * 
   * Apple 0 (3) ['Apple', 'Banana', 'Cherry']
     Banana 1 (3) ['Apple', 'Banana', 'Cherry']
     Cherry 2 (3) ['Apple', 'Banana', 'Cherry'] 
     */
})

console.log('map 문, foreach 문 비교')
const a = fruits.forEach((fruit, index) => {
  // this가 사용되지 않기 때문에, 화살표 함수를 사용하여도 된다.
  console.log(`${fruit}-${index}`)
})
console.log(a) // foreach문에서 반환되는 값이 없기 때문에, undefined 출력.

const b = fruits.map(function (fruit, index) {
  return `${fruit}-${index}`
})
console.log(b)
/** foreach와 map의 차이점
 *  map은 특정값을 반환하여, 그 값을 b에 할당하고 아래의 콘솔에서 출력하고 있다.
 *  foreach문은 내부적으로 콘솔을 사용하여 출력하며, 값을 반환하지 않는다. */

// 객체 리터럴 반환 방식
console.log('객체 리터럴 반환 방식')
const c = fruits.map((fruit, index) => ({
  id: index,
  name: fruit
}))
// const c = fruits.map(function (fruit, index) {
//   return {
//     id: index,
//     name: fruit
//   }
// })
console.log(c)

// filter 개념
// filter : 콜백함수에서 반환되는 값이 true인 경우에만 값을 반환함.
// map과 filter는 원본의 데이터를 변형시키지 않는다.
console.log('filter 개념')
const d = numbers.map(number => number < 3)
// const d = numbers.map(number => {
//   return number < 3
// })
console.log(d) // 출력 : [true, true, false, false]

const e = numbers.filter(number => number < 3)
// const e = numbers.filter(number => {
//   return number < 3
// })
console.log(e) // 출력 : [1, 2]


// .find() .findIndex()
console.log('.find(), .findIndex() 사용해보기')
const f = fruits.find(fruit => /^B/.test(fruit))
/* 대문자 B로 시작하는 데이터. true인 값만 반환함. 
   값을 반환하게 되면, 조회하고 true, false를 비교하는
   동작이 멈추게 된다. */
// const f = fruits.find(fruit => {
//   return /^B/.test(fruit)
//   
// })
console.log(f) // 출력 : Banana

const g = fruits.findIndex(fruit => /^B/.test(fruit))
/* find의 로직으로 찾은 데이터의 인덱스를 반환함. */
// const g = fruits.findIndex(fruit => {
//   return /^B/.test(fruit)  
// })
console.log(g) // 출력 : 1


// .includes()
console.log('.includes() 사용해보기')
const h = numbers.includes(3)
console.log(h) // 출력 : true
const i = fruits.includes('HEROPY')
console.log(i) // 출력 : false

// .push() .unshift()
// 원본 데이터 수정됨!
console.log('.push() .unshift() 사용해보기')
numbers.push(5)
console.log(numbers) // 출력 : [1, 2, 3, 4, 5]
numbers.unshift(0)
console.log(numbers) // 출력 : [0, 1, 2, 3, 4, 5]

// .reverse()
// 원본 데이터 수정됨!
numbers.reverse()
fruits.reverse()
console.log(numbers)
console.log(fruits)

// .splice()
// 원본 데이터 수정됨!
numbers.splice(2,1) // index 2의 위치에서부터 1개의 아이템을 지운다.
console.log(numbers)
numbers.splice(2,0,999) // index 2의 위치에서부터 0개의 아이템을 지우고, 999라는 데이터 추가
console.log(numbers)

fruits.splice(2,0,'Orange')
console.log(fruits)

console.log('')
console.log('')
console.log('')