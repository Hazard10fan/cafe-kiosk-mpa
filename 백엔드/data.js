// 전체 카페 메뉴 데이터 (가짜 DB 역할)
const cafeMenus = [
    {
        id: 1,
        name: "아이스 아메리카노",
        category: "coffee",
        taste: "bitter",      // 맛: bitter(쓴맛), sweet(단맛), refreshing(상큼/깔끔)
        caffeine: "yes",      // 카페인 여부: yes, no
        price: 4500,
        tags: ["#시원함", "#기본템", "#직장인필수"],
        img: "images/iced_americano.png",
        desc: "에스프레소에 시원한 물과 얼음을 더해 깔끔하고 진한 풍미의 커피"
    },
    {
        id: 2,
        name: "딸기 쏙쏙 라떼",
        category: "non-coffee",
        taste: "sweet",
        caffeine: "no",
        price: 5800,
        tags: ["#생딸기", "#달콤함", "#우유듬뿍"],
        img: "images/strawberry_latte.png",
        desc: "새콤달콤한 딸기 과육이 우유와 부드럽게 어우러진 시그니처 라떼"
    },
    {
        id: 3,
        name: "자몽 허니 블랙티",
        category: "tea",
        taste: "sweet",
        caffeine: "yes",
        price: 5300,
        tags: ["#꿀조합", "#쌉싸름", "#따뜻하게도가능"],
        img: "images/grapefruit_tea.png",
        desc: "달콤한 자몽 소스와 향긋한 홍차가 만나 중독성 있는 맛을 내는 티"
    },
    {
        id: 4,
        name: "초코 크로플",
        category: "dessert",
        taste: "sweet",
        caffeine: "no",
        price: 4800,
        tags: ["#겉바속촉", "#초코폭탄", "#당충전"],
        img: "images/choco_croffle.png",
        desc: "바삭하게 구운 크로플 위에 진한 초콜릿 시럽과 청크를 올린 디저트"
    },
    {
        id: 5,
        name: "디카페인 바닐라 라떼",
        category: "coffee",
        taste: "sweet",
        caffeine: "no",
        price: 5500,
        tags: ["#달달구리", "#밤에마셔도OK", "#부드러움"],
        img: "images/decaf_vanilla.png",
        desc: "카페인 부담 없이 달콤하고 부드럽게 즐기는 바닐라 라떼"
    }
];