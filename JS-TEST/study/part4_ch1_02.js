// JS 데이터(숫자)
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math
console.log('part4_ch1_02 ')
console.log('')
const pi = 3.14159265358979
console.log(pi)

const str5 = pi.toFixed(2)
console.log(str5)
console.log(typeof str) // 출력 : string

const integer = parseInt(str5) // 문자에서 숫자로 추출함.
const float = parseFloat(str5) // 소수부분 유지하면서 숫자로 출력함.
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)

console.log('abs: ', Math.abs(-12))
console.log('min: ', Math.min(2, 8))
console.log('max: ', Math.max(2, 8))
console.log('ceil: ', Math.ceil(3.14)) // 올림
console.log('floor: ', Math.floor(3.14)) // 내림
console.log('round: ', Math.round(3.14)) // 반올림
console.log('random: ', Math.random()) // 0~1 의 랜덤수

console.log('')
console.log('')
console.log('')