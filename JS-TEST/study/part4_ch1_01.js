// JS 데이터(문자)
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
/* prototype : 프로토타입을 이용하여 지정한 메서드는 메모리에 한번만 만들어진다. */
console.log('part4_ch1_01')
console.log('')
const result = 'Hello world!'.indexOf('world')
// const result = 'Hello world!'.indexOf('heropy')
console.log(result)

const str = '0123'
console.log(str.length)

const str2 = 'Hello world!'
console.log(str2.indexOf('HEROPY') !== -1)
console.log(str2.slice(6,11))
console.log(str2.replace('world!','HEROPY'))

const str3 = 'thesecon@gmail.com'
console.log(str3.match(/.+(?=@)/)[0])

const str4 = '    Hello world  '
console.log(str4.trim()) // 앞뒤의 공백 제거

console.log('')
console.log('')
console.log('')