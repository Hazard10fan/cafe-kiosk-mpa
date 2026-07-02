# ☕ Café Kiosk & Recommendation Web Platform
**Vite + React SPA 아키텍처 기반의 비즈니스 로직 분리형 스마트 카페 주문 키오스크 웹 플랫폼**

본 프로젝트는 UI/UX 렌더링 엔진과 핵심 비즈니스 로직(데이터 처리 및 연산 레이어)을 엄격히 분리(Decoupling)하여 설계된 모던 웹 애플리케이션입니다. 고성능 프론트엔드 빌드 도구인 **Vite**와 **React** 컴포넌트 프레임워크를 기반으로 스마트 키오스크의 단일 페이지 애플리케이션(SPA) 사용자 경험을 완벽히 구현했으며, 별도의 외부 데이터베이스 없이 클라이언트 사이드 단에서 완결성 있는 상태 관리(State Management) 및 데이터 영속성을 증명한 프로젝트입니다.

---
## 🌐 Live Demo & CD Pipeline
* **Deployment URL**: https://cafe-kiosk-mpa.vercel.app/
* **CI/CD 인프라**: GitHub `main` 브랜치와 Vercel 클라우드 플랫폼을 연동하여 코드가 푸시(git push)되는 즉시 실시간 프로덕션 환경에 실시간으로 빌드 및 자동 반영되는 지속적 배포(Continuous Deployment) 자동화 파이프라인이 구축되어 있습니다.

---
## 🖥️ 시연 화면 및 사용자 흐름 (UI/UX)

### 1. 메인 홈 화면 (`SelectedItemPane` / `MenuSection`)
웜 베이지 톤과 오렌지 포인트 컬러를 매칭하여 실제 상용화된 키오스크 수준의 뛰어난 시각적 가독성을 제공합니다. 상단의 추천 배너 영역과 좌측의 카테고리 탭(커피, 논커피, 디저트) 전환 시 화면 무중단 상태로 매끄러운 반응형 클라이언트 사이드 렌더링이 이루어집니다.
![메인 홈 화면](메인%20홈%20화면.png)

### 2. 동적 옵션 제어 모달 (`SelectedItemModal`)
특정 메뉴 선택 시 트리거되는 중앙 팝업 모달창입니다. 사용자는 다른 페이지로의 이동 없이 해당 자리에서 레ギュラー, 라지, 점보 등의 세부 옵션을 직관적으로 제어할 수 있으며, 선택된 옵션에 따른 단가가 실시간으로 화면 변수에 반영됩니다.
![옵션 팝업 화면](옵션%20팝업%20화면.png)

### 3. 실시간 트랜잭션 알림 시스템 (`ToastMessage`)
상품이 장바구니에 성공적으로 담기면 하단에 흐려지며 나타났다 사라지는 토스트 팝업 알림창이 구동됩니다. 이를 통해 시스템의 상태 변화를 유저에게 비동기적으로 명확히 전달하여 사용자 경험(UX) 가산점을 확보했습니다.
![장바구니(알림)화면](장바구니(알림)화면.png)

### 4. 영속성 장바구니 및 총액 집계 (`CartModal` / `OrderSummary`)
주문 도우미 영역에서 주문 내역을 클릭하면 활성화되는 오버레이 모달창입니다. 담긴 상품들의 수량을 실시간으로 가감하거나 개별/전체 삭제할 수 있으며, 수량 변동에 따른 총 결제 금액 연산이 오차 없이 실시간으로 계산되어 출력됩니다.
![장바구니 화면](장바구니%20화면.png)

---
## 🛠 Tech Stack

### Front-end UI Layer
* **Framework & Build Tool**: React (v18.3.1), Vite (v5.4.10)
* **Language & Styling**: JavaScript (ES6+), Modern Vanilla CSS (index.css)
* **UI Architecture**: Component-Driven SPA (Single Page Application)

### Logic & Data Layer
* **Architecture**: Vanilla JS 기반 독립형 데이터 가공 및 연산 엔진
* **Storage & Platform**: Browser LocalStorage, Vercel Cloud Platform

---
## 🚀 Key Features

**1. 컴포넌트 구동형 동적 메뉴 렌더링 시스템**
* 인메모리(In-memory) 메뉴 데이터셋을 기반으로, 사용자의 카테고리 탭 선택에 맞춰 JavaScript 고차 함수(`filter()`, `map()`)를 활용해 조건에 부합하는 아이템만 선별하여 화면을 동적으로 가동합니다.

**2. 캡슐화된 상태 기반 옵션 제어 모달**
* 메뉴의 고유 식별자(`id`)를 추적하여 해당 상품의 상세 정보와 규격을 매칭합니다. 선택한 컵 사이즈(레귤러/라지/점보)에 따른 가산 금액 트래킹 로직이 객체 구조로 안전하게 캡슐화되어 동작합니다.

**3. 비동기식 토스트 알림 및 실시간 피드백**
* 장바구니 트랜잭션 발생 시 독립적인 상태 변화 알림 모듈(`ToastMessage.jsx`)이 구동되어 유저에게 직관적인 인터랙션 피드백을 전달합니다.

**4. 영속성 데이터 관리 및 실시간 결제 애그리게이션 알고리즘**
* 장바구니 내 적층되는 상품 데이터를 브라우저의 `LocalStorage`와 연동하여 세션이 유지되는 동안 데이터 정합성을 영속적으로 보장합니다.
* 장바구니 내부의 실시간 수량 변경 흐름 및 고차 함수 `reduce()`를 극대화한 실시간 총결제 금액 산출 로직이 결합되어 안정적인 주문 시뮬레이션을 제어합니다.

---
## 📁 Directory Structure

본 저장소는 UI를 담당하는 **프론트엔드 워크스페이스**와 데이터 가공 및 도메인 로직을 담당하는 **백엔드 아키텍처 레이어**가 엄격히 구분된 구조적 모듈화를 채택하고 있습니다.
```
├── .gitignore
├── LICENSE
├── README.md
│
├── 프론트엔드/             # React Component & UI View Layer
│   ├── package.json        # 종속성 관리 (React v18, Vite v5 환경 명세)
│   ├── vite.config.js      # Vite 빌드 파이프라인 및 개발 서버 환경 설정
│   ├── index.html          # SPA 어플리케이션 단일 Entry Point
│   └── src/
│       ├── main.jsx        # React DOM Root 마운트 스크립트
│       ├── App.jsx         # 메인 어플리케이션 레이아웃 컴포넌트
│       ├── index.css       # 전체 키오스크 테마 및 웜 베이지 디자인 스타일시트
│       ├── components/     # 계층별 독립 재사용 UI 컴포넌트 모듈
│       │   ├── HeroHeader.jsx
│       │   ├── MenuSection.jsx
│       │   ├── SelectedItemModal.jsx
│       │   ├── SelectedItemPane.jsx
│       │   ├── CartModal.jsx
│       │   ├── CartPane.jsx
│       │   ├── OrderSummary.jsx
│       │   ├── CheckoutModal.jsx
│       │   └── ToastMessage.jsx
│       └── data/
│           └── menuData.js # 프론트엔드 가상 바인딩용 스텁 데이터
│
└── 백엔드/                 # Core Business Logic & Data Engine Layer (본인 담당)
├── data.js             # 시스템 전체 인메모리 핵심 데이터셋 아키텍처 설계
├── list.js             # 메뉴 조건 매칭 및 고차함수 기반 필터링 파이프라인
├── detail.js           # 데이터 매칭 및 브라우저 스토리지 입출력(I/O) 제어 엔진
└── wishlist.js         # 데이터 파싱 및 실시간 총액 aggregate 연산 비즈니스 로직 
```
---
## 👥 R&R (Role & Responsibilities)

**1. Front-end UI/UX Architecture (팀원 1 담당)**
* React 프레임워크 기반의 컴포넌트 설계 및 키오스크 컨셉의 레이아웃 마크업
* 웜 베이지 및 오렌지 포인트를 활용한 현대적인 감성의 키오스크 테마 디자인 스타일링
* 한 화면 내에서 팝업 모달, 패널, 토스트 메시지가 유기적으로 구동되는 SPA 인터랙션 및 상태 화면 연동

**2. Logic & Data Architecture (팀원 2 / 본인 담당)**
* 어플리케이션 표준 인메모리 메뉴 데이터셋 규격 정의 및 데이터 포맷 아키텍처 설계 (`data.js`)
* 도메인 데이터의 정합성 검증 및 고차함수 기반 조건부 데이터 필터링 파이프라인 구축 (`list.js`)
* 선택 옵션에 따른 객체 데이터 캡슐화 및 브라우저 스토리지 입출력(I/O) 트랜잭션 흐름 제어 엔진 구현 (`detail.js`)
* 장바구니 내 수량 가감 제어 데이터 검증 및 `reduce()` 연산 기반의 실시간 결제 데이터 애그리게이션 알고리즘 설계 (`wishlist.js`)

---
## 💡 Engineering Log: UI와 비즈니스 로직의 완전한 결합 분리 (Decoupling)

본 프로젝트는 데이터 연산 레이어(`백엔드/`)와 뷰 렌더링 레이어(`프론트엔드/`)의 의존성을 최소화하는 **디커플링(Decoupling) 설계**를 원칙으로 진행되었습니다. 

데이터의 내부 구조, 필터링 기법, 적층 및 연산 연산 메커니즘은 순수 자바스크립트 엔진으로 독립되어 작동하므로, 프론트엔드 작업자는 마크업 구조나 컴포넌트 계층의 변동에 구애받지 않고 유연하게 UI 디자인과 사용자 경험(UX) 고도화에 전념할 수 있습니다. 로직 담당자 또한 독립적인 테스트와 디버깅을 수행할 수 있어 협업 생산성을 극대화했습니다. 

이러한 구조적 분리는 향후 클라이언트 사이드 임시 로직을 실제 상용 REST API 인프라 및 대규모 외부 데이터베이스 시스템으로 마이그레이션하더라도, 프론트엔드 컴포넌트 코드의 대대적인 전면 수정 없이 인터페이스 결합 함수만 교체하면 되는 강력한 **확장성과 유지보수성**을 제공합니다.
