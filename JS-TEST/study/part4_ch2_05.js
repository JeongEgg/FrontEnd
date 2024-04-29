// OMDb API
// https://www.omdbapi.com/
// 영화 제목 검색을 다루어보기 위한 api. js에서 다루어본다.

// axios
// https://github.com/axios/axios
// JSON 데이터를 다루기 위한 api.
// 개발의존성이 아닌 실제 브라우저에서 처리할 수 있어야 하기 때문에 다음의 명령어로 설치한다.
// npm i axios
console.log('part4_ch2_05')
console.log('')
import axios from 'axios'

function fetchMovies() {
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then((res) => {
      console.log(res)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent = res.data.Search[0].Title
      imgEl.src = res.data.Search[0].Poster
    })
}
fetchMovies()

console.log('')
console.log('')
console.log('')