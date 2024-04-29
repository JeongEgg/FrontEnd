// 가져오기, 내보내기
console.log('part4_ch2_01')
console.log('')
import _ from 'lodash'
import getType from '../getType'
import { random, user as heropy } from '../getRandom'
// user라는 객체를 꺼내오고 heropy라는 이름으로 활용하기
import * as R from '../getRandom'
/** random, user를 한번에 꺼내오는 경우. 
 *  와일드카드(Wildcard Character, *)는 여러 내용을 한꺼번에 지정할 목적으로
 *  사용하는 기호를 가리킨다.
*/


console.log(_.camelCase('the hello world'))
console.log(getType([1,2,3])) // 디폴트 함수 가져오기
console.log(random(), random()) // 함수 가져오기
console.log(heropy) // 객체 가져오기
console.log(R)

/** 특정 내용을 딱 한번만 내보내기를 사용하는 경우에는
 *  default를 사용하는 것이 좋고, 내보내는 내용이 많은 경우에는
 *  이름을 지정하여 사용하는 것이 좋다.*/

console.log('')
console.log('')
console.log('')