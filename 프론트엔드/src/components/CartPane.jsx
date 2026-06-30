import React from 'react';

function CartPane({ cart, onChangeQuantity, totalAmount, onCompleteOrder }) {
  return (
    <div className="cart-card">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">장바구니</p>
          <h2>주문 내역 확인</h2>
        </div>
        <span className="summary-badge">{cart.length}개</span>
      </div>

      {cart.length === 0 ? (
        <p className="empty-text">장바구니에 담긴 메뉴가 없습니다.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={`${item.id}-${item.size}`} className="cart-item">
              <div>
                <strong>{item.name}</strong>
                <p>
                  {item.size} · {item.price.toLocaleString()}원
                </p>
              </div>
              <div className="cart-item__actions">
                <button onClick={() => onChangeQuantity(item.id, item.size, -1)} type="button">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onChangeQuantity(item.id, item.size, 1)} type="button">+</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="price-box total-row">
        <span>총 결제 금액</span>
        <strong>{totalAmount.toLocaleString()}원</strong>
      </div>

      <button className="secondary-btn" onClick={onCompleteOrder} type="button">
        주문 완료
      </button>
    </div>
  );
}

export default CartPane;
