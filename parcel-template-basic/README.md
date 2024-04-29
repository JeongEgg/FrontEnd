
1. Parcel
    - 구성 없는 단순한 자동 번들링
    - 소/중형 프로젝트에 적합
1. Webpack
    - 매우 꼼꼼한 구성
    - 중/대형 프로젝트에 적합
1. Rollup


---
## ico converter
    - png와 같은 이미지파일을 ico 파일로 변경.
[https://www.icoconverter.com/](https://www.icoconverter.com/)

- favicon.ico 파일이 루트 경로에 있지만, 서버를 실행한 이후에 적용되지 않는 것을 볼 수 있다. 서버를 실행하면, 이전에 만들었던 html, css, js 파일과 이미지 파일이 dist에 삽입된다. 그러나 favicon.ico 파일은 삽입되지 않은 것을 확인할 수 있다.
- 패키지를 이용하여 favicon.ico 파일을 자동적으로 dist 파일에 넣어주도록 할 수 있다.
[https://www.npmjs.com/package/parcel-plugin-static-files-copy](https://www.npmjs.com/package/parcel-plugin-static-files-copy)

---
## 정적 파일 연결
npm install -D parcel-plugin-static-files-copy
- package.json에 다음 코드 추가.
```json
  "staticFiles": {
     "staticPath": "static"
  }
```

---
## autoprefixer
- 웹의 표준이 권고안으로 나오기 전에도 어느 정도 지금 현재 만들고 있는 기술의 범위가 정해져서 공지가 된다. 그런 부분들을 브라우저를 제작하는 벤더사라고 하는 벤더 회사, 즉 크롬을 제작하는 구글, 인터넷 익스플로러, 엣지라는 브라우저를 제작하는 마이크로소프트에서 미리 그런 기술들을 차용을 해서 자신의 브라우저에서 동작할 수 있는 구조를 만들어 놓는다. 그런 부분이 표준기술은 아니기 때문에 -webkit, -ms와 같은 접두사를 붙여서 사용하는 방식을 제공하고 있다. 일부 사용자들은 표준기술이 동작하지 않는 구형 브라우저를 사용하는 경우가 있을 수 있다. 그런 경우에 접두사가 붙어있는 시험적으로 적용되었던 기술들이 사용자의 구형 브라우저에서 동작을 할 수 있다. 특정 브라우저에서 표준이 동작이 가능하면, 접두사가 붙어있는 나머지 같은 기능의 다른 속성들은 동작하지 않게 된다. 반대로 표준기술이 동작할 수 없는 브라우저에서는 접두사가 붙어잇는 부분의 속성이 동작할 수도 있다.

- 공급 업체 접두사 (Vender Prefix)
    - 접두사를 이용하여 구형 브라우저에서도 표준기술이 적용될 수 있도록 한다.
    - autoprefixer : 위에서 접두사를 자동적으로 붙여줄 수 있도록 돕는 패키지이다.
    - npm i -D postcss
    - npm i -D autoprefixer

```json
"browserslist": [
    "> 1%",
    "last 2 versions"
]
```

---

- postcss, autoprefixer의 버전충돌을 해결하기 위해, autoprefixer를 다운그레이드 한다.
- npm i -D autoprefixer@9


---
## babel
- 구형 브라우저(ES5)에서도 ES6,7,8이 적용되도록 함.
[https://babeljs.io/docs/](https://babeljs.io/docs/)
- npm i -D @babel/core @babel/preset-env
- babel도 아래의 설정의 영향을 받음.
```json
"browserslist": [
    "> 1%",
    "last 2 versions"
]
```
- npm i -D @babel/plugin-transform-runtime
- async 함수를 사용하기 위한 라이브러리 설치(에러가 발생하지는 않았다. 위에서 babel을 설치할 때 자동으로 설치된 것으로 보인다)

---
## CLI
- parcel
[https://ko.parceljs.org/cli.html](https://ko.parceljs.org/cli.html)