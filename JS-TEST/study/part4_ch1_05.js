// JS 데이터(객체)
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object
console.log('part4_ch1_05')
console.log('')
const userAge = {
  // key: value
  name: 'Heropy',
  age: 85
}
const userEmail = {
  name: 'Heropy',
  email: 'thesecon@gmail.com'
}

/** assign 함수는 target(userAge) 객체에 source(userEmail) 객체를
 *  병합시키고, 그 객체 데이터를 변수에 할당(반환)한다.
 *  속성이 중복될 때에는(name이라는 동일한 속성이 존재함) target의 속성값에
 *  source의 속성값을 덮어쓰기 한다.
 * 
 *  assign이라는 메서드는 Object라는 객체에 프로토타입으로 만들어져 있는
 *  메서드가 아니기 때문에, 실제 객체 데이터에는 사용할 수 없다.
 */
const target = Object.assign({}, userAge, userEmail)
// userAge 데이터는 원본을 유지한 채, {}에 객체를 할당하여 반환한다.
console.log(target)
console.log(userAge)
console.log(target === userAge)

const target2 = Object.assign(userAge, userEmail)
// userAge의 데이터 또한 병합된 데이터로 변한다.
console.log(target2)
console.log(userAge)
console.log(target2 === userAge)

const j = { k: 123 }
const k = { k: 123 }
console.log(j === k)
/** 위의 출력에서 target과 userAge 객체의 비교에서 true로 나왔다.
 * 아래에서 j,k 객체를 비교하였을 때는 서로 다르다는 결과가 나왔다.
 * 안에 담겨진 데이터 값은 동일하지만, 두 객체는 서로 다른 객체라는 것을 의미한다.
 * 
 * js 데이터의 불변성, 가변성
 * 
 * js의 데이터는 하나의 메모리주소에 값이 들어가져 있다. userAge라는 변수는 
 * 메모리에 있는 특정 객체의 메모리주소만 참고해서 갖고 있는 것이다.
 * 특정 데이터를 사용할 때에는 변수의 메모리주소를 이용하여 메모리에 접근하고
 * 데이터를 가져와서 사용한다.
 * 참조형 데이터 _ {}(객체데이터), [](배열데이터), function(함수)
 * 
 * 여기서 target과 userAge의 메모리 주소가 동일하기 때문에
 * (같은 객체 데이터를 가리키기 때문에) 비교의 결과로 true를 반환한다.
*/

const user = {
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmail.com'
}

const keys = Object.keys(user)
console.log(keys) // 출력 : ['name', 'age', 'email']

console.log(user['email']) // 출력 : thesecon@gmail.com

const values = keys.map(key => user[key])
console.log(values) // 출력 : ['Heropy', 85, 'thesecon@gmail.com']

console.log('')
console.log('')
console.log('')