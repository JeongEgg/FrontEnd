const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// 생성자 방식
// const regexp = new RegExp('the','g')
// const regexp = new RegExp('the','gi')

// 리터럴 방식
const regexp = /the/gi
console.log(str.match(regexp))
// 'g' : the가 들어있는 모든 데이터를 배열에 할당함. 
// 'i' : 대소문자를 구분하지 않음


const regexp2 = /fox/gi
console.log(regexp2.test(str))
console.log(str.replace(regexp2, `AAA`))
// 'fox'라는 단어 부분에 'AAA'라는 글자가 들어감.
console.log(str)
// str의 데이터 자체가 변경되지는 않음.

let str2 = `
  010-1234-5678.
  thesecon@gmail.com
  https://www.omdbapi.com/?apikey=7035c60c&s=frozen
  The quick brown fox jumps over the lazy dog.
  abbcccdddd
`
const regexp3 = /fox/gi
str2 = str2.replace(regexp3, 'AAA')
console.log(str2)


console.log(str2.match(/\.$/gim))
// 정규표현식에서 특정 기능으로 동작하는 기호 앞에 백슬래쉬('\')를 붙여서, 일반적인 문자로 해석이 되도록 한다.
// $ : 이 기호의 앞에 있는 단어(문자)로 끝나는 부분을 찾아서 끝나는 부분을 일치시킨다는 의미
//     문자열 데이터의 끝부분에 마침표('.')가 있는지를 일치시키는 패턴
// m : multi line의 옵션을 붙이면 각 줄에서 끝나는 부분에 마침표가 있는지를 찾고, 있으면 그것을 배열 데이터로 만든다.




// 패턴
let str3 = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:1234
d
동해물과_백두산이 마르고 닳도록
`

console.log(
  str3.match(/d$/gm)// 한 줄의 끝부분이 'd'로 끝나면 그 부분이 찾아진다는 의미
  // g만 있으면 가장 마지막줄의 d만 찾아냄.
  // m이 추가되면 그 위의 줄의 d도 찾아냄.
)
console.log(
  str3.match(/^t/gm) // 한 줄의 시작부분에 't'로 시작하는 부분이 찾아진다는 의미
)

console.log(
  str3.match(/./g)
)
console.log(
  str3.match(/http/g)
)
console.log(
  str3.match(/h..p/g)
)
console.log(
  str3.match(/fox|dog/g) // 순서가 바뀌더라도 먼저 찾아지는 것을 먼저 반환함.
)
console.log(
  str3.match(/https?/g) // 앞의 문자 's'가 있을수도 있고, 없을수도 있는 경우를 찾음.
)
console.log(
  str3.match(/d{2}/) // abbcccdddd 부분에서 d가 2번 반복되는 부분에서 읽어옴.
)
console.log(
  str3.match(/d{2}/g) // abbcccdddd 부분에서 d가 2번 반복되는 부분에서 2개 읽어옴.
)
console.log(
  str3.match(/d{2,}/g) // d라는 글자가 2개 이상의 연속되어 일치되는 값을 찾아옴
)
console.log(
  str3.match(/d{2,3}/g) 
)
console.log(
  str3.match(/\w{2,3}/g) // 숫자와 알파벳을 포함하는 일치시킬 수 있는 2~3개의 모든 글자
)
console.log(
  str3.match(/\b\w{2,3}\b/g)
  // 숫자, 알파벳이 2개 이상, 3개 이하인 경우를 찾음. 숫자, 알파벳이 아닌 다른 기호나 띄어쓰기가 경계가 된다.
)

console.log(
  str3.match(/[fox]/g) // f,o,x 문자 모두를 찾음.
)
console.log(
  str3.match(/[0-9]{1,}/g) // 1개 이상 연속되는 모든 숫자
)
console.log(
  str3.match(/[가-힣]{1,}/g) // 1개 이상 연속되는 모든 한글
)

console.log(
  str3.match(/\w/g) // _ 출력
)
console.log(
  str3.match(/\bf\w{1,}/g) // f로 시작하는 모든 단어
)
console.log(
  str3.match(/\d{1,}/g) // 
)
console.log(
  str3.match(/\s/g) // 모든 공백부분
)

const h = `   the hello  world   !

`
console.log(
  h.replace(/\s/g,'') // 모든 공백이 사라진 데이터로 출력
)


const str4 = `
  010-1234-5678
  thesecon@gmail.com
  https://www.omdbapi.com/?apikey=7035c60c&s=frozen
  The quick brown fox jumps over the lazy dog.
  abbcccdddd
`

console.log(
  str4.match(/.{1,}(?=@)/g) // 앞쪽 일치
)
console.log(
  str4.match(/(?<=@).{1,}/g) // 뒤쪽 일치
)


// git 테스트 2 