// lodash
// https://lodash.com/docs/4.17.15#uniq
console.log('part4_ch2_02')
console.log('')
import _ from 'lodash'

const usersA = [
  { 
    userId: '1', 
    name: 'HEROPY' 
  },
  { 
    userId: '2', 
    name: 'Neo' 
  }
]
const usersB = [
  { 
    userId: '1', 
    name: 'HEROPY' 
  }, // 중복된 데이터
  { 
    userId: '3', 
    name: 'Amy'
  }
]
const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId'))
// uniqBy(중복된 데이터가 들어있는 배열 데이터, 중복을 구분할 고유한 속성)
// 속성이름을 기준으로 고유한 값만 정리함.

// 중복이 발생할 수 있는 배열 2개가 있고, 아직 합치기 전인 경우
const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)
// 고유값으로 사용할 세번째의 값 'userId'를 넣으면 해당 값을 고유값으로 판단하여 배열을 합침.

console.log('')
console.log('')
console.log('')

const users = [
  { 
    userId: '1', 
    name: 'HEROPY' 
  },
  { 
    userId: '2', 
    name: 'Neo' 
  },
  { 
    userId: '3', 
    name: 'Amy' 
  },
  { 
    userId: '4', 
    name: 'Evan' 
  },
  { 
    userId: '5', 
    name: 'Lewis' 
  }, 
]

const foundUser = _.find(users, { name: 'Amy' })
const foundUserIndex = _.findIndex(users, { name: 'Amy' })
console.log(foundUser) // 데이터 조회
console.log(foundUserIndex) // 데이터 인덱스

_.remove(users, { name: 'HEROPY' }) // 데이터 제거
console.log(users)

console.log('')
console.log('')
console.log('')