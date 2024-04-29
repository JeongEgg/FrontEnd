// 데이터 불변성(Immutability)
// 원시 데이터 : String, Number, Boolean, undefined, null
console.log('part4_ch1_08')
console.log('')
let a = 1
let b = 4
console.log(a, b, a === b) // 값이 달라서가 아니라, 메모리주소가 다르기 때문에 false로 출력된다.
b = a
console.log(a, b, a === b) // 동일한 메모리 주소를 바라보게 되기 때문에 동일한 값을 가진다.
a = 7
console.log(a, b, a === b)
let c = 1 // 새로운 메모리에 데이터가 들어가는 것이 아닌, 1의 값이 들어가있는 메모리를 바라보게 된다.
console.log(b, c, b === c)

// 참조형 데이터 : Object, Array, Function. 값을 할당할 때마다 새로운 메모리 주소를 할당함.
let d = { k: 1 }
let e = { k: 1 }
console.log(d, e, d === e) // 출력 : false. d1, e1은 서로 다른 메모리 주소를 바라봄.
d.k = 7
e = d // e1이 바라보는 메모리주소가 d1이 바라보는 메모리 주소와 동일해진다. 
console.log(d, e, d === e)
d.k = 2 // 한쪽의 값이 수정하게 되더라도 서로 같은 메모리주소를 바라보기 때문에 동일한 값을 가진다.
console.log(d, e, d === e) // 출력 : true
let f = e
console.log(d, e, f, d === f)
d.k = 9
console.log(d, e, f, d === f)

console.log('')
console.log('')
console.log('')