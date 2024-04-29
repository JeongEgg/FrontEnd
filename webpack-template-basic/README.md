## webpack 설치
```terminal
npm i -D webpack webpack-cli webpack-dev-server@next
```
- @next -> webpack-cli와 webpack-dev-server의 버전을 일치시켜준다.
---

- webpack : bundler가 동작하기 위한 핵심 패키지.
- webpack-cli : 터미널에서 입력하는 커맨더 라인 인터페이스를 지원하는 패키지.
- webpack-dev-server : webpack을 이용하여 개발 서버를 오픈하였을 때, 화면의 내용들을 바로 갱신해서 고쳐주기 위해 사용하는 패키지.
- parcel bundler에서는 위와 같은 설정이 기본적으로 다 제공이 되었고, webpack를 적용할 때에는 위와 같이 json에서 설정을 해주어야 한다.

- --mode : --mode 설정을 추가하여 현재가 개발모드인지 제품모드인지를 구분할 수 있다.

## entry, output

- parcel index.html -> parcel bundler의 진입점을 index.html로 설정한 것.
- webpack에서는 entry, output을 이용하여 진입점을 설정함.

- 실행 명령어 : npm run build
[https://webpack.kr/configuration/entry-context/#entry](https://webpack.kr/configuration/entry-context/#entry)
[https://webpack.kr/configuration/output/#outputpath](https://webpack.kr/configuration/output/#outputpath)

## plugins
``` terminal
npm i -D html-webpack-plugin
```
- 실행 명령어 : npm run dev

## 정적 파일 연결

npm i -D copy-webpack-plugin
- dist 폴더에 파일이 잘 생성되는지 확인할 때에는 build 하기 위해 'npm run build' 명령어를 사용한다.


## module

- css 파일을 static 경로에 넣지 않고, 디폴트 경로에 생성하는 경우, main.js에서 css 파일을 import하는 방식을 이용할 수 있다. webpack의 entry에서 main.js 파일을 읽어들이고, 이 때 main.js에서 css 파일을 import하여 함께 빌드할 수 있다.
- entry로 js파일을 읽어들일 수 있지만, css파일을 읽을 수 없기 때문에 css를 읽기 위한 패키지 추가가 필요하다.
- 다음의 명령어를 이용하여 css를 읽기 위한 패키지를 설치한다.

```terminal
npm i -D css-loader style-loader
```

## scss

```terminal
npm i -D sass-loader sass
```

## Autoprefixer(PostCSS)

```terminal
npm i -D postcss autoprefixer postcss-loader
```

postcss - 스타일의 후처리를 도와주는 패키지


```json
"browserslist": [
    "> 1%",
    "last 2 versions"
  ]
```
현재의 프로젝트가 어느 브라우저를 지원하는지를 명시함. 전세계 1%의 브라우저에서 마지막 2개의 버전에 대해 지원.


## babel

```terminal
npm i -D @babel/core @babel/preset-env @babel/plugin-transform-runtime
```

- babel-loader 설치.
```terminal
npm i -D babel-loader
```

## Netlify 배포
