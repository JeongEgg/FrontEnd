// this
/* 일반(Normal) 함수는 호출 위치에 따라 this 정의!
   화살표(Arrow) 함수는 자신이 선언된 범위에서 this 정의! */
console.log('part3_ch4_02')
console.log('')
const heropy = {
  name: 'Heropy',
  normal: function () {
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
heropy.normal() // 출력 : Heropy. 여기서 normal 함수의 호출위치는 앞의 'heropy'
heropy.arrow() // 출력 : undefined

const amy = {
  name: 'Amy',
  normal: heropy.normal, // 위의 heropy에서 정의한 함수를 그대로 할당함.
  arrow: heropy.arrow
}
amy.normal() // 출력 : Amy
amy.arrow() // 출력 : undefined


function User(name){
  this.name = name
}
User.prototype.normal = function () {
  console.log(this.name)
}
User.prototype.arrow = () => {
  console.log(this.name)
}

const heropy2 = new User('Heropy')

heropy2.normal() // 출력 : Heropy
heropy2.arrow() // 출력 : undefined


const timer = {
  name: 'Heropy!!',
  timeout: function () {
    setTimeout(
      () => {
        console.log(this.name)
      }/* 여기서의 화살표 함수는 위의 timeout이라는 함수 내부에 선언되어 있다. 그리고
          timeout 함수의 this는 결과적으로 timer라는 객체 데이터를 가리킨다. 따라서
          화살표 함수의 this.name에서 this는 timer라는 객체를 가리키게 된다.*/
      // function () {
      //   console.log(this.name)
      // } // 여기서 this는 setTimeout의 로직에서 콜백이 들어가서 실행된다.
    , 20000)
  }
}
timer.timeout() // 출력 : Heropy!!

console.log('')
console.log('')
console.log('')