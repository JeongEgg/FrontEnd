// 구조 분해 할당
console.log('part4_ch1_06')
console.log('')
console.log('구조 분해 할당.')
// 객체 데이터
const user = {
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmail.com'
}
const { name: heropy, age, address = 'Korea' } = user
/** 값이 없을 경우 기본값을 지정할 수 있다.
 *  값을 할당하여도 해당 데이터에 대한 값이 객체에 있을 경우에는
 *  객체에 있는 값을 반환한다.
 *  특정 속성의 속성이름을 변경하고자 할 때에는, :(콜론) 뒤에
 *  속성명을 지정하여 사용할 수 있다.
*/

console.log(`사용자의 이름은 ${heropy}입니다.`) // 사용자의 이름은 Heropy입니다.
console.log(`${heropy}의 나이는 ${age}세입니다.`) // Heropy의 나이는 85세입니다.
console.log(`${heropy}의 이메일 주소는 ${user.email}입니다.`) // Heropy의 이메일 주소는 thesecon@gmail.com입니다.
console.log(address) // undefined -> Korea

// 배열 데이터
const fruits = ['Apple', 'Banana', 'Cherry']
const [a, b, c, d] = fruits
console.log(a, b, c, d)
// 'Banana' 데이터만 추출하는 경우
const [, e] = fruits
console.log(e)

console.log('')
console.log('')
console.log('')