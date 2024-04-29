// rc(Runtime Configuration)가 붙은 파일은 구성 파일을 의미한다.

// 1. ECM (import, export와 같은 방식으로 모듈 가져오기를 적용하는 방식)

// 2. common.js (node.js 환경에서 가져오기를 사용하는 방식 require(), module.exports)



// node.js 의 환경.
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}