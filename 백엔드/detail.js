/**
 * URL 파라미터에서 id를 읽어와 해당하는 메뉴 객체를 찾는 함수
 * 예) detail.html?id=2 -> 2번 딸기 라떼 객체 반환
 */
function getMenuDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"), 10); // 주소창의 문자열 id를 숫자로 변환

    // 고차함수 find를 사용해 id가 일치하는 메뉴 하나를 찾습니다.
    const currentMenu = cafeMenus.find(menu => menu.id === id);

    if (!currentMenu) {
        alert("존재하지 않는 상품입니다.");
        window.location.href = "list.html";
        return null;
    }

    return currentMenu;
}

/**
 * 선택한 메뉴와 옵션을 장바구니(LocalStorage)에 추가하는 함수
 * @param {number} menuId - 상품 ID
 * @param {object} selectedOptions - 사용자가 선택한 옵션 (예: { ice: "조금", shot: 1, quantity: 2 })
 */
function addToCart(menuId, selectedOptions) {
    // 1. 기존 장바구니 데이터를 로컬스토리지에서 가져옵니다. (없으면 빈 배열)
    let cart = localStorage.getItem("cafeCart");
    cart = cart ? JSON.parse(cart) : [];

    // 2. 해당 상품의 기본 정보를 찾습니다.
    const targetMenu = cafeMenus.find(menu => menu.id === menuId);
    
    // 3. 장바구니에 담을 새 아이템 객체를 생성합니다.
    const cartItem = {
        id: targetMenu.id,
        name: targetMenu.name,
        price: targetMenu.price,
        img: targetMenu.img,
        options: selectedOptions // 팀원 1이 화면에서 넘겨줄 옵션 객체
    };

    // 4. 장바구니 배열에 추가하고 로컬스토리지에 문자열 상태로 저장합니다.
    cart.push(cartItem);
    localStorage.setItem("cafeCart", JSON.stringify(cart));
    
    alert(`${targetMenu.name}이(가) 장바구니에 담겼습니다.`);
}