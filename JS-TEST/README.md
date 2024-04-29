<!-- 명령어 실행순서 -->

## nvm 및 node 설치

[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

1. 위의 링크에서 nvm 설치
1. nvm install 12.14.1

## node 버전
- v12.14.1

## 명령어 실행순서
1. npm init -y(처음 프로젝트를 생성하고 package.json 파일 생성시.)
1. npm install parcel-bundler -D
1. npm install lodash

---
- 설치한 패키지(node-modules)를 지우더라도 'npm i' 명령어를 이용해 패키지를 다시 설치할 수 있다. 설치할 패키지의 버전, 정보는 package.json에서 확인할 수 있다.

---
- package.json에 명시되어져 있는 모듈들 parcel-bundle, lodash와 같은 모듈들이 내부적으로 사용하는 또다른 모듈들은 package-lock.json에서 관리된다.

---
- 개발용 의존성 패키지 설치
  - -D, --save-dev
  - $ npm install -D parcel-bundler
- 일반 의존성 설치
  - $ npm install lodash

---
- '개발용 의존성 패키지'는 개발할 때에만 필요하고, 웹 브라우저가 동작할 때에는 필요하지 않다.
- '일반 의존성 패키지'는 웹 브라우저가 동작할 때에도 필요하다는 것을 의미한다.

--- 
 
```json
"dev": "parcel index.html"
```
- package.json의 'script 부분에 추가하면 live server를 사용하지 않고 명령어를 통해 해당 프로젝트를 서버로 실행할 수 있다.( ***npm run dev*** 로 실행하기.)
- dev라는 이름으로 서버를 실행하는 것을 의미한다. scripts 내부에 선언하면 명령어 실행을 프로젝트의 내부에서만 해당 명령어가 동작하게 된다.

- 번들(bundle)은 프로젝트 개발에 사용한 여러 모듈(패키지)을 하나로 묶어내는 작업을 말한다.
```json
"build": "parcel build index.html"
```
- package.json에 build 부분을 추가하고, ***npm run build***를 실행하면, 기존에 작성한 html, js에 대해 압축된 html파일과 난독화가 적용된 js파일을 생성해준다. dist경로에 생성된 파일들은 실제 웹브라우저에 동작하는 용도로 만들어진다.
---
소스코드 테스트 과정에서 생성되는 .cache, dist, node_modules 파일들은 package.json과 명령어로 언제든지 생성할 수 있다. 버전관리가 가능하다. git을 사용할 때에는 위의 폴더들까지 다 커밋하는 것보다는 해당 폴더들을 제외하고 프로젝트를 clone할 때 다시 생성하는 것이 좋다. '.gitignore' 파일을 이용하여 커밋을 할 때에 제외할 파일, 경로를 설정할 수 있다.



프로젝트 열기 : code . -r


npm i parcel-bundler -D (개발 의존성 설치)
npm i lodash (일반 의존성 설치 _ 실제 브라우저에서도 패키지가 적용됨)

프로젝트 실행 : npm run dev 