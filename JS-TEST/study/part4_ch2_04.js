// Storage
// https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage
console.log('part4_ch2_04')
console.log('')
const user = {
  name: 'HEROPY',
  age: 85,
  emails: [
    'thesecon@gmail.com',
    'neo@zillinks.com'
  ]
}

localStorage.setItem('user', JSON.stringify(user))
// 웹의 로컬 저장소에 user 객체를 저장함.
// 웹 페이지 -> 검사 -> 애플리케이션 -> 로컬 스토리지 에서 확인 가능.

// console.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user') // 로컬 스토리지에서 데이터가 삭제됨

const str = localStorage.getItem('user')
const obj =  JSON.parse(str)
obj.age = 22
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj)) // 로컬 스토리지 데이터 수정.

// Lowdb : lodash를 기반으로 동작함. 브라우저에서 작은 JSON 데이터베이스르 다루기 위한 패키지.
// https://github.com/typicode/lowdb

console.log('')
console.log('')
console.log('')