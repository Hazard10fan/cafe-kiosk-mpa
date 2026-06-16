/**
 * URL 파라미터를 분석하여 조건에 맞는 메뉴 배열을 반환하는 함수
 * 예 1) list.html?category=coffee -> 커피 메뉴만 필터링
 * 예 2) list.html?taste=sweet&caffeine=no -> 단맛이 나고 카페인이 없는 메뉴만 필터링 (추천 결과용)
 */
function getFilteredMenus() {
    // 1. 주소창의 쿼리 스트링(파라미터)을 읽어옵니다.
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const taste = params.get("taste");
    const caffeine = params.get("caffeine");

    // 2. 아무 조건도 없으면 전체 메뉴를 반환합니다.
    if (!category && !taste && !caffeine) {
        return cafeMenus;
    }

    // 3. 고차함수 filter를 사용해 조건에 맞는 메뉴만 걸러냅니다.
    const filtered = cafeMenus.filter(menu => {
        let isMatch = true;

        // 카테고리 조건이 있을 때 검사
        if (category && menu.category !== category) isMatch = false;
        // 맛 조건이 있을 때 검사
        if (taste && menu.taste !== taste) isMatch = false;
        // 카페인 조건이 있을 때 검사
        if (caffeine && menu.caffeine !== caffeine) isMatch = false;

        return isMatch;
    });

    // 4. 예외 처리: 만약 필터링된 결과가 하나도 없다면 기본 추천 상품(예: 1번 아메리카노)을 배열에 담아 반환합니다.
    if (filtered.length === 0) {
        console.warn("조건에 맞는 메뉴가 없어 기본 메뉴를 추천합니다.");
        return [cafeMenus[0]]; 
    }

    return filtered;
}