# NextJs Introduction

## 초기 설치

npx create-next-app@latest

Next.js 프로젝트 초기화(+타입스크립트)
npx create-next-app@latest --typescript

https://nextjs.org/docs/getting-started


- 상위 폴더를 vsc에서 열고
- nextJS를 설치할거냐고 물어볼건데 y를 입력
- 마지막에 있는 "app router을 이용하시겠습니까?(추천) 질문에 대해서는 No를 입력해주셔야 합니다. 만약 Yes를 누르시면 니꼬쌤과 다르게 진행되니 꼭! No를 입력해주세요

## 라이브러릴와 프레임워크의 차이 

: 라이브러리와 프레임워크의 주요 차이점은 "Inversion of Control"(통제의 역전)입니다. 라이브러리에서 메서드를 호출하면 사용자가 제어할 수 있습니다.
그러나 프레임워크에서는 제어가 역전되어 프레임워크가 사용자를 호출합니다.

- 라이브러리는 우리가 갖다쓰는 것, 개발자가 어떤 프로그램을 가져다 쓰는것 (Ex React: 렌더링할때 ReactDOM.render()를 불러와서 사용한다.)
- 프레임워크는 정해진 틀 안에서 커스터마이징. 개발자의 코드를 프로그램이 불러오는 것 (Ex NextJS: 정해진 규칙에 따라 코드를 작성하면 렌더링된다. )



# 1.1 Pages

1. pages폴더 내에 있는 파일이름이 접속할 수 있는 URL의 이름이 된다.
pages/about.js 생성 -> localhost:3000/about
2. pages폴더 내에 있는 파일에는 반드시 export default가 있어야 한다.
3. 404 error page를 next.js에서 자동으로 만들어준다.
4. 앱의 홈은 index.js를 따른다.
5. react를 import하지 않고 jsx를 사용할 수 있다.





next Js를 설치했으면 import react from "react"를 쓸 필요가 없다.
다만 useState,useEffect, lifecycle method 같은 애들을 써야 할 경우에는 꼭 import를 해줘야 한다.

# 왜 next js일까? (pre-rendering)

pre-render : 컴포넌트의 초기상태를 기반으로 미리 렌더링된 html을 클라이언트로 넘김 => 페이지의 초기 로딩 지연을 줄일 수 있음!
hydration : pre-render된 페이지에 react의 반응성을 입히는 것

(reat로만 만들어진 앱은 처음에 흰화면으로 아무것도 안보여주다가가 자바스크립트 데이터 페칭 후에 보여준다.) 

# routing 
페이지 간 클라이언트 측 경로 전환을 활성화하고 single-page app 경험을 제공하려면 Link컴포넌트가 필요합니다.
a 태그를 사용하면 링크가 바뀔때마다, 새로고침 된다.

```
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
const router = useRouter();

  return (
    <nav>
      <Link style={{color:router.pathname === "/" ? "red":"blue"}} href="/">Home</Link>
      <Link style={{color:router.pathname === "/about" ?"red":"blue"}} href="/about">About</Link>
    </nav>
  );
```

# css module

1. module.css파일을 만들기

1. NavBar.module.css  파일 생성 
```
.link{
  text-decoration: none;
}
.active {
  color: tomato;
}
```
2. 이제 클래스를 추가하기
NavBar.js파일

- 클래스가 한개라면 ``` className={styles.link}```이 형태로 추가
- 클래스가 여러개라면 백틱을 사용해서 연결해주거나 join 매서드 활용 
CSS Module 사용하기
1. className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}
2. [styles.link, router.pathname === "/" ? styles.active : ""].join(" ")

```
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
const router = useRouter();
  return (
    <nav>
      <Link  href="/" className={`${styles.link} ${router.pathname ==="/" ? styles.active: ""}`}>Home</Link>
      <Link href="/about" className={[styles.link, router.pathname === "/about" ? styles.active:"",].join(" ")}>About</Link>
      <Link href="/about" className={styles.link}>Etc</Link>
    </nav>
  );
}
```


Array.prototype.join()
join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
```
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // expected output: "Fire,Air,Water"
console.log(elements.join('-')); // expected output: "Fire-Air-Water"
```

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join

# Styles JSX

css module 파일을 생성하는것 말고도 style jsx를 통해 next.js에서 css를 줄 수 있다. 



styled-jsx를 사용하는 컴포넌트는 다음과 같습니다.
```
< style jsx>{`
CSS 스타일..
`}< /style>
```

NavBar.js
```
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
const router = useRouter();
  return (
    <nav>
      <Link  href="/" className={router.pathname ==="/" ? "active":""}>Home</Link>
      <Link href="/about" className={router.pathname ==="/about" ? "active":""} >About</Link>
  
      <style jsx global>{`
      a {
        text-decoration:none;
      }
      .active{
        color:red;
      }
      
      `}</style>
    </nav>
  );
}
```


NavBar.js에 준 css는 NavBar 컴포넌트들한테만 적용된다. 즉index.js에 컴포넌트에 active를 추가해도 영향을 주지않고 Link에도 영향을 주지 않는다. 
styled-jsx
https://github.com/vercel/styled-jsx

# custom app

Custom App

Next.js는 App 컴포넌트를 사용하여 page를 초기화합니다. 이를 재정의하고 페이지 초기화를 제어할 수 있습니다. 이를 통해 다음과 같은 놀라운 일을 할 수 있습니다.

1. 페이지 변경 간에 레이아웃 유지
2. 페이지 탐색 시 state 유지
3. componentDidCatch를 사용한 Custom 에러 처리
4. 페이지에 추가 데이터 삽입
5. Global CSS 추가

기본 App을 재정의하려면 아래와 같이 ./pages/_app.js 파일을 만듭니다.
```
export default function MyApp({ Component, pageProps }) {
return < Component {...pageProps} />
}
```
https://nextjs.org/docs/advanced-features/custom-app

Custom App (with 타입스크립트)
_app.ts가 아닌 _app.tsx파일을 만들고 아래와 같이 작성
```
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps){
return < Component {...pageProps} />
}
```
https://nextjs.org/docs/basic-features/typescript#custom-app

+ 파일명.module.css 파일 형태를 제외한 모든 나머지 css파일들은 _app.js에서만 import해와서 사용해야 한다. (글로벌 css간의 충돌을 피하기 위해서이다.)
https://nextjs.org/docs/messages/css-global


```
import NavBar from "@/components/NavBar";
export default function App({Component, pageProps}){
  return(
    <div>
      <NavBar />
      <Component {...pageProps} />
     <span>hello</span>
     
     <style jsx global>{`
          a{
            color:yellow;
          }
      `}
      </style>
    </div>
  )
}
```