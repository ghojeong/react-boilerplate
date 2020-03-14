# freewheelin

freewheelin 과제

## 프로젝트 실행법

1. `npm i`: npm 패키지 설치
2. `npm start`: 프로젝트 실행
3. 브라우저로 `http://localhost:3000/` 에 접근

## Command

- `npm start`: 프로젝트 실행
- `npm run build`: 프로젝트 빌드
- `npm run lint`: eslint 검사
- `npm run jest`: jest로 테스트 코드 실행
- `npm test`: eslint 검사와 테스트 코드를 실행

## Architecture

[redux-observable](https://redux-observable.js.org/)을 통해 React + Redux + RxJS를 활용한 [넷플릭스의 설계](https://youtu.be/AslncyG8whg)를 참고했습니다.

## Directory Structure

```txt
└── src
  └── app
    ├── actions
    ├── assets
    ├── components
    ├── configs
    ├── epics
    ├── layouts
    ├── lib
    ├── models
    ├── reducers
    ├── routes
    ├── screens
    ├── selectors
    ├── services
    └── themes
```

- actions
  - [리덕스 액션](https://redux.js.org/basics/actions)을 정의해 놓은 디렉토리
- assets
  - 정적인 데이터들에 관한 파일들을 모아놓는 디렉토리
- components
  - [리액트 컴포넌트](https://ko.reactjs.org/docs/components-and-props.html)를 모아놓은 디렉토리
- configs
  - 보안상 민감하게 관리해야하는 환경변수들을 모아놓은 디렉토리
- epics
  - [redux-observable의 에픽](https://redux-observable.js.org/docs/basics/Epics.html)을 정의해 놓은 디렉토리
- layouts
  - 화면의 뼈대가 되는 레이아웃들이 있는 디렉토리
- lib
  - 모듈로 분리할 수 있는 부분들을 라이브러리로 정리한 디렉토리
- models
  - DTO에 사용되는 데이터 모델들을 정의해 놓은 디렉토리
  - 지금은 interface로 정의되어 있지만, instance를 직접 만들고 수정할 필요가 있을 경우 class로 만들 수도 있다.
- reducers
  - [리덕스 리듀서](https://redux.js.org/basics/reducers)를 정의해 놓은 디렉토리
- routes
  - `/screens`에 정의된 화면으로 이동할 수 있도록, 라우팅과 관련한 것들을 모아놓은 디렉토리
  - 본래 리액트는 url을 통해 라우팅을 하지만, 이 프로젝트에서는 진행된 step 에 따라 라우팅 되도록 한다.
- screens
  - 라우팅에 따라 보여지는 화면 리액트 컴포넌트들을 정의한 디렉토리
- selectors
  - store 에서 데이터를 가져오는 [selector](https://react-redux.js.org/next/api/hooks#useselector) 를 정의한 디렉토리
  - react-redux 라이브러리의 useSelector 훅을 사용하기 위한 selector 함수들을 모아놓은 디렉토리이다.
- services
  - [MVC 패턴의 service](https://pjh3749.tistory.com/89)들을 모아놓은 디렉토리
- themes
  - 사용한 디자인 시스템에 의존적인 theme들을 모아놓은 디렉토리
  - 여러 theme 을 정의해두면, dark mode 처럼 환경에 적절한 theme을 제공할 수 있다.

## Convention

### 주석

- 모든 주석에는 TODO와 같은 토큰을 반드시 붙인다.
- TODOs를 스캔하기 쉽도록, [fixme](https://github.com/JohnPostlethwait/fixme) 모듈에 나와있는 토큰을 적극적으로 활용한다.

### 확장자

- 컴포넌트는 tsx 확장자를 사용하고, 나머지는 전부 ts 확장자를 사용한다.

### 네이밍

- camelCase를 기본으로 하되, 컴포넌트와 CTO 모델은 PascalCase를 사용한다.
- boolean과 관련된 변수에는 prefix로 is~, has~와 같은 prefix를 붙인다.

## 진행상황 보고

### AS-IS

### TO-BE

- material-ui에 의존적인 컴포넌트들을, 디자인 시안에 맞게 다시 개발해야함
  - `app/components/dumb/material`
  - `app/components/smart/Notifier`
