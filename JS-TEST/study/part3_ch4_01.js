// 생성자 함수

// 아래와 같이 동일한 객체를 여러번 반복하여 사용하는 경우 메모리관리가 비효율적이다.
console.log('part3_ch4_01')
console.log('')
const heropy = {
  firstName: 'Heropy', // 속성
  lastName: 'Park', // 속성
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
    // return `${heropy.firstName} ${heropy.lastName}`
    // 변수명을 변경하게 되면, 불편하기 때문에 그냥 this를 쓰는 것이 좋음.
  } // 메서드
}
console.log(heropy.getFullName())

const amy = {
  firstName: 'Amy',
  lastName: 'Clarke',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(amy.getFullName())

const neo = {
  firstName: 'Neo',
  lastName: 'Smith',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(neo.getFullName())

// 객체를 생성하는 생성자 함수.
/* firstName, lastName 같은 데이터의 경우에는 그때그때마다
   들어오는 데이터가 다르기 때문에 메모리를 관리하기에 안 좋지만, 
   getFullName은 로직이 완벽하게 똑같기 때문에 통일화해서
   메모리를 효율적으로 관리할 수 있다. */
function User(first, last) {
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const heropy2 = new User('Heropy','Park')
const amy2 = new User('Amy','Clarke')
const neo2 = new User('Neo','Smith')

/* 아래의 .getFullName 선언을 통해 위에서 정의한 함수를
   한번씩 참조한다
   자바스크립트 -> 프로토타입의 언어. */
console.log(heropy2.getFullName())
console.log(amy2.getFullName())
console.log(neo2.getFullName())

console.log('')
console.log('')
console.log('')