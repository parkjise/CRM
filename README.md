# 한화정밀기계 Service CRM(Front-End)

이것은 [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages)으로 부트스트랩된 [Next.js](https://nextjs.org/)
프로젝트입니다. /create-next-app).

## 시작하기!!!

## 먼저 npm을 설치합니다.

```bash
npm install
```

#### i. npm install

#### ii. npm config set strict-ssl=false 또는 npm config set "strict-ssl" false -g

#### iii. 바로 npm install을 하면 내부 방화벽과 인증서에 막혀 모든 npm이 설치되지 않음 -> strict-ssl을 false로 환경설정 변경

#### iv. 내 컴퓨터(마우스 우클릭) - 속성 - 시스템 속성 - 고급 - 환경 변수 - 새로 만들기 -> ‘변수 이름’: NODE_TLS_REJECT_UNAUTHORIZED, ‘변수 값’: 0 입력 – PC 재부팅

#### v. npm install로 모든 npm 설치

#### vi. npm install 진행 중 NODE_TLS_REJECT_UNAUTHORIZED가 나오면 정상

#### vii. npm run dev

## 개발 서버를 실행합니다.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:1900)을 열어 결과를 확인하세요.

`app/page.tsx`를 수정하여 페이지 편집을 시작할 수 있습니다. 파일을 편집하면 페이지가 자동으로 업데이트됩니다.

이 프로젝트는 [`next/font`](https://nextjs.org/docs/basic-features/font-optimization)를 사용하여 맞춤 Google 글꼴인 Inter를 자동으로 최적화하고
로드합니다.

## 더 알아보기

Next.js에 대해 자세히 알아보려면 다음 리소스를 살펴보세요.

- [Next.js 문서](https://nextjs.org/docs) - Next.js 기능 및 API에 대해 알아보세요.
- [Next.js 알아보기](https://nextjs.org/learn) - 대화형 Next.js 튜토리얼입니다.

[Next.js GitHub 저장소](https://github.com/vercel/next.js/)를 확인해 보세요. 피드백과 기여를 환영합니다!

## 참고 문서

- [Next.js 13 vs Remix: An In-depth case study](https://prateeksurana.me/blog/nextjs-13-vs-remix-an-in-depth-case-study/)
- [Building towards a new default rendering model for web applications – Vercel](https://vercel.com/blog/partial-prerendering-with-next-js-creating-a-new-default-rendering-model)
- [Server Action – React](https://react.dev/reference/react/use-server)
- [Metadata with Next.js](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

## 추후 트러블 슈팅 예정
- root/frontend/src/app/auth/user/wait/page.tsx:105
```
app-index.js:34 Warning: validateDOMNesting(...): <div> cannot appear as a descendant of <p>.
```

- S-Crm Core 퍼포먼스, 속도 개선
```
크롬 개발자 도구 내의 프로필 및 네트워크 속도 latency
```

- 타입 스크립트 문법 에러, 경고 디버깅
```
// @ts-ignore
```