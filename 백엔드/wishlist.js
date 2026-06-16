/**
 * 로컬스토리지에서 장바구니 리스트를 가져오는 함수
 */
function getCartItems() {
    const cart = localStorage.getItem("cafeCart");
    return cart ? JSON.parse(cart) : [];
}

/**
 * 장바구니에서 특정 인덱스의 상품을 삭제하는 함수
 * @param {number} index - 삭제할 아이템의 배열 인덱스
 */
function removeCartItem(index) {
    let cart = getCartItems();
    cart.splice(index, 1); // 해당 위치의 아이템 1개 삭제
    localStorage.setItem("cafeCart", JSON.stringify(cart));
}

/**
 * 장바구니에 담긴 총 금액을 계산하여 반환하는 함수
 */
function getCartTotal() {
    const cart = getCartItems();
    // 고차함수 reduce를 사용하여 총 금액 합산 (기본 음료 가격 계산)
    return cart.reduce((total, item) => total + item.price, 0);
}

/**
 * 주문 완료 후 장바구니를 완전히 비우는 함수
 */
function clearCart() {
    localStorage.removeItem("cafeCart");
}