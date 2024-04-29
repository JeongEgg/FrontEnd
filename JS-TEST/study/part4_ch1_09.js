// 얕은 복사, 깊은 복사
console.log('part4_ch1_09')
console.log('')
const user = {
  name: 'Heropy',
  age: 85,
  emails: ['thesecon@gmail.com']
}
// const copyUser = user1
const copyUser = {...user}
// const copyUser = Object.assign({}, user1) // 복사
console.log(copyUser === user) // true

user.age = 22
console.log('user', user) // {name: 'Heropy', age: 22, emails: Array(1)}
console.log('copyUser',copyUser) // {name: 'Heropy', age: 85, emails: Array(1)}

console.log('-----')
console.log('-----')

user.emails.push('neo@zillinks.com')
console.log(user.emails === copyUser.emails) // 출력 : true
/* user1.emails는 배열 데이터이고, 배열 데이터는 참조형 데이터이다. 위에서
   copyUser에서 새로운 메모리를 할당하였어도, emails 데이터를 복사한 적은 없기 때문에
   emails에 같은 메모리 주소를 할당하고 있다.*/
console.log('user', user)
/** age: 22
    emails: (2) ['thesecon@gmail.com', 'neo@zillinks.com']
    name: "Heropy" */
console.log('copyUser', copyUser)
/** age: 85
    emails: (2) ['thesecon@gmail.com', 'neo@zillinks.com']
    name: "Heropy" */
console.log('')
console.log('')
console.log('')
import _ from 'lodash'

const user1 = {
  name: 'Heropy',
  age: 85,
  emails: ['thesecon@gmail.com']
}
// https://lodash.com/docs/4.17.15#cloneDeep
const copyUser1 = _.cloneDeep(user1)
console.log(copyUser1 === user1) // false

user1.age = 22
console.log('user1', user1) 
console.log('copyUser1',copyUser1)

console.log('-----')
console.log('-----')

user1.emails.push('neo@zillinks.com')
console.log(user1.emails === copyUser1.emails)

console.log('user1', user1)
/** {name: 'Heropy', age: 22, emails: Array(2)}
    age: 22
    emails: (2) ['thesecon@gmail.com', 'neo@zillinks.com']
    name: "Heropy" */
console.log('copyUser1', copyUser1)
/** {name: 'Heropy', age: 85, emails: Array(1)}
    age: 85
    emails: ['thesecon@gmail.com']
    name: "Heropy" */

console.log('')
console.log('')
console.log('')