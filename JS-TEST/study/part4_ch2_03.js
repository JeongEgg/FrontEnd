// json
console.log('part4_ch2_03')
console.log('')
import myData from '../myData.json'

console.log(myData)
// json은 하나의 문자열 데이터이다.(포맷이 자동으로 변환되여 객체와 같이 출력되는 것이다.)
/** 데이터가 객체와 같이 관리될 때, 내부에 선언된 속성들이 각각 메모리에 할당되므로, 
 *  데이터를 메모리관점에 다루는 것이 비효율적이다. 그래서 json에서는 객체 데이터를
 *  하나의 문자열 데이터로 관리한다.
 */

const user = {
  name: 'HEROPY',
  age: 85, // json 속성명에는 ''(따옴표)를 붙여서 사용할 수도 있다.
  emails: [
    'thesecon@gmail.com',
    'neo@zillinks.com'
  ],
  'company-name': {}// 속성명에 특수기호가 들어가는 경우.
}

console.log('user',user)

const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj)

console.log('')
console.log('')
console.log('')