# ☕ Café Kiosk & Recommendation Web Platform
**Multi-Page Application(MPA) 구조 기반의 경량화된 클라이언트 사이드 카페 주문 및 개인화 추천 키오스크 웹 플랫폼**

본 프로젝트는 별도의 백엔드 서버 인프라 없이 브라우저 내장 자원만을 활용하여 웹 애플리케이션의 데이터 지속성(Persistence)과 상태 관리(State Management)를 구현한 프로젝트다. 주소창의 파라미터 제어(Query String)와 브라우저 로컬 스토리지(LocalStorage) 파싱을 고도화하여 단일 페이지 애플리케이션(SPA) 못지않은 매끄러운 다중 페이지(MPA) 사용자 경험을 제공하도록 설계되었다.

---
## 🌐 Live Demo & CD Pipeline
Deployment URL: https://cafe-kiosk-mpa.vercel.app/

CI/CD: GitHub main 브랜치와 Vercel 인프라를 연동하여 코드 푸시(git push) 시 실시간 프로덕션 환경에 10초 이내로 자동 반영되는 지속적 배포(Continuous Deployment) 파이프라인이 구축되어 있다.



---
## 🛠 Tech Stack
* Language: HTML5, CSS3, JavaScript (ES6+ Vanilla JS)

* Layout & UI/UX: Responsive Web Design, CSS Transition Animations (프론트엔드 레이어 단계에서 유연하게 확장 예정)

* Storage & API: Browser LocalStorage, Open-Meteo Weather API

* Deployment: Vercel Cloud Platform

---
## 🚀 Key Features
**1. 사용자 성향 기반 맞춤형 음료 추천 엔진 (data.js / list.js)**
* 사용자의 맛 선호도(단맛, 쓴맛, 상큼함) 및 카페인 수용 여부를 직관적인 선택지 기반 UI로 수집한다.

* 수집된 데이터를 알고리즘을 통해 쿼리 스트링(Query String) 파라미터로 변환하여 메인 리스트 뷰로 전달한다.

**2. 동적 데이터 필터링 및 렌더링 시스템 (list.js)**
* URLSearchParams API를 활용하여 전달받은 URL 파라미터를 실시간으로 파싱한다.

* JavaScript 고차 함수(filter(), map())를 활용하여 인메모리(In-memory) 메뉴 데이터셋에서 조건에 부합하는 아이템만 선별하여 클라이언트 사이드 렌더링(CSR)을 수행한다.

* 일치하는 결과가 없는 경우 예외 처리(Exception Handling) 로직을 통해 기본 추천 메뉴를 동적으로 표출한다.

**3. 외부 API 기반 컨텍스트 매칭 및 옵션 제어 (detail.js)**
* 특정 메뉴 선택 시 고유 식별자(id) 파라미터를 기반으로 find() 연산을 수행하여 상세 정보를 동적으로 로드한다.

* 실시간 외부 날씨 API(Open-Meteo)를 비동기(async/await)로 호출하여 기온 및 기후 상태에 따라 최적의 추천 옵션(ICE/HOT)을 유저에게 컨텍스트 기반으로 제안한다. Network Error 발생 시 유연한 Fallback 데이터 핸들링이 적용되어 있다.

* 키오스크 필수 옵션 데이터 및 픽업 매장 좌표 정보를 객체 구조로 캡슐화하여 브라우저의 LocalStorage에 직렬화(JSON.stringify) 후 영속 저장한다.

**4. 영속성 데이터 관리 및 주문 시뮬레이션 (wishlist.js)**
* 여러 페이지에 걸쳐 적층된 로컬 스토리지 데이터를 역직렬화(JSON.parse)하여 결제 대기 리스트를 재구성한다.

* 장바구니 내 수량 변경, 실시간 총결제 금액 산출 로직(reduce() 활용) 및 아이템 개별/전체 삭제 기능을 안정적으로 제어한다.

**5. 로컬스토리지 기반 마이크로 커뮤니티 피드 (board.js)**
* 타임스탬프 기반의 고유 ID 발급 메커니즘을 적용하여 외부 데이터베이스 없이도 데이터의 CRUD(Create, Read, Delete) 흐름을 완벽히 모방한 방명록 및 이용 후기 피드를 구현한다.

---
📁 Directory Structure (Current)
현재 본 저장소는 비즈니스 로직 및 핵심 데이터 아키텍처 레이어 세팅이 완료된 상태다.

```
├── .gitignore
├── LICENSE
├── README.md
└── 백엔드/             # Core Business Logic & Data Architecture Layer (본인 담당)
    ├── data.js       # 인메모리 핵심 데이터셋(In-memory Menu Dataset) 구조 설계
    ├── list.js       # URL 파라미터 분석 및 고차함수 기반 필터링 엔진
    ├── detail.js     # 데이터 매칭 및 로컬스토리지 입출력(I/O) 흐름 제어
    ├── wishlist.js   # 결제 데이터 파싱 및 실시간 금액 aggregate 연산 로직
    └── board.js      # 타임스탬프 기반 게시글 적층 및 데이터 영속성 제어
```
💡 프론트엔드 통합 가이드:
각 화면의 마크업(HTML) 및 디자인(CSS) 소스 코드가 포함될 프론트엔드 레이어의 디렉토리 구조 및 파일 명명 규칙은, 프론트엔드 담당자(팀원 1)의 개발 정체성과 구현 방식에 맞춰 유연하게 통합 및 구축될 예정이다.

---
## ⚠️ 프론트엔드(팀원 1) 작업 시 Vercel 라우팅 주의사항
Vercel 클라우드 호스팅 환경에서 다중 페이지(MPA) 간의 라우팅 인프라가 브라우저 무중단 상태로 올바르게 오케스트레이션되기 위해 아래 규칙을 준수하여 마크업을 진행한다.

1. 최상위 루트(Root) 파일 위치 필수 준수

* Vercel 배포 인프라는 프로젝트 최상위 경로(Root)에 위치한 index.html을 플랫폼의 Entry Point(메인 홈 화면)로 자동 리다이렉션팅한다.

* 따라서 index.html, test.html, list.html, detail.html, wishlist.html, board.html 등의 모든 독립적 화면 파일들은 서브 폴더 내부가 아닌 최상위 루트 경로(.gitignore가 배치된 공간)에 평면 구조로 생성해야만 정적 라우팅 경로(예: /list.html) 분기가 정상 도달한다.

2. 상대 자원 참조 및 선행 검증 가이드

* HTML 마크업 내부에서 이미지, 스타일시트, 백엔드 로직 스크립트 자원을 바인딩할 때는 환경 제약 없는 상대 경로(./) 형식을 고수한다.

* 깃허브 원격 Push 전, 로컬 에디터 환경 내 Live Server 에뮬레이터를 가동하여 로컬 환경(http://127.0.0.1:5500)에서의 쿼리 파라미터 유실 여부와 스토리지 입출력 트랜잭션을 선행 검증하는 것을 권장한다.


---
## 👥 R&R (Role & Responsibilities)
본 프로젝트는 구조적인 협업을 위해 UI 디자인과 비즈니스 로직 레이어를 엄격히 분리(Decoupling)하여 개발을 진행한다.

1. Front-end UI/UX Architecture (팀원 1 담당):

* 키오스크 컨셉의 레이아웃 마크업 및 최적의 컬러웨이/테마 확립

* Media Query를 활용한 모바일 퍼스트 반응형 뷰포트 최적화

* 페이지 전환 및 컴포넌트 인터랙션용 CSS 구조 설계 및 연동

2. Logic & Data Architecture (팀원 2 / 본인 담당):

* 전체 인메모리 핵심 데이터셋 포맷 설계 및 규격 정의 (data.js)

* URLSearchParams 기반 다중 조건 쿼리 스트링 데이터 파싱 파이프라인 구축 (list.js, detail.js)

* 비동기 프로미스(fetch) 기반 외부 기후 데이터 트래킹 및 옵션 매칭 데이터 처리 알고리즘 구현 (detail.js)

* 브라우저 스토리지 입출력을 활용한 장바구니 상태 관리 및 애그리게이션 알고리즘 설계 (wishlist.js)

* 상태 변화에 따른 데이터 정합성 검증 및 예외 처리 로직 구현

---
## 💡 Engineering Log
**UI와 비즈니스 로직의 완전한 결합 분리(Decoupling)**
데이터 레이어(백엔드/)와 뷰 레이어(HTML/CSS)의 의존성을 최소화하여 설계했다. 프론트엔드 작업자는 데이터의 구조나 저장 방식에 구애받지 않고 마크업과 UI 디자인에 전념할 수 있으며, 로직 담당자는 HTML 태그의 구조 변경과 무관하게 독립적으로 데이터 흐름을 최적화하고 디버깅할 수 있는 환경을 구축했다. 이는 추후 실제 REST API 및 외부 DB 인프라로 전환하더라도 자바스크립트 코드의 대대적인 수정 없이 인터페이스 함수만 변경하면 되는 유연한 확장성을 제공한다.
 

