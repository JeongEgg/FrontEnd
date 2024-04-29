// 화살표 함수
console.log('part3_ch3_02')
console.log('')
const double = function (x) {
  return x * 2
}
console.log('double: ',double(7))

// 축약형
const doubleArrow = (x) => {
  return x * 2
}
const doubleArrow2 = x => x * 2
const doubleArrow3 = x => { return x * 2 }
const doubleArrow4 = x => ({ name: 'Heropy' })
console.log('doubleArrow: ',doubleArrow(7))
console.log('doubleArrow2: ',doubleArrow2(7))
console.log('doubleArrow3: ',doubleArrow3(7))
console.log('doubleArrow4: ',doubleArrow4(7))

console.log('')
console.log('')
console.log('')