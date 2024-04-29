// ES6 Classes
console.log('part3_ch4_03')
console.log('')
class User { // 클래스 형태의 함수 정의
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  // 프로토타입을 사용하지 않아도 프로토타입으로 함수를 생성함.
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const heropy = new User('Heropy','Park')
const amy = new User('Amy','Clarke')
const neo = new User('Neo','Smith')

console.log(heropy)
console.log(amy.getFullName())
console.log(neo.getFullName())

console.log('')
console.log('')
console.log('')