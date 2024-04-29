// 상속(확장)
console.log('part3_ch4_04')
console.log('')
class Vehicle {
  constructor(name, wheel){
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle) // 출력 : Vehicle {name: '운송수단', wheel: 2}

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
    // 여기서의 super는 확장된 클래스인 Vehicle을 의미함.
  }
}
const myBicycle = new Bicycle('삼천리',2)
const daughtersBicycle = new Bicycle('세발',3)
console.log(myBicycle) // 출력 : Bicycle {name: '삼천리', wheel: 2}
console.log(daughtersBicycle) // 출력 : Bicycle {name: '세발', wheel: 3}

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
    // 기존의 내용을 super로 가져오고 아래에 this로 확장함.
  }
}
const myCar = new Car('벤츠',4,true)
const daughtersCar = new Car('포르쉐', 4, false)
console.log(myCar) // 출력 : Car {name: '벤츠', wheel: 4, license: true}
console.log(daughtersCar) // 출력 : Car {name: '포르쉐', wheel: 4, license: false}

console.log('')
console.log('')
console.log('')