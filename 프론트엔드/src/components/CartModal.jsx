import React from 'react';

function CartModal({ isOpen, onClose, cart, onChangeQuantity, totalAmount, onCompleteOrder }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <div className="modal-header">
          <div>
            <p className="eyebrow">주문 내역 확인</p>
            <h2>장바구니</h2>
          </div>
          <button className="modal-close" type="button" onClick={onClose}>
            ×
          </button>
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
                  <button type="button" onClick={() => onChangeQuantity(item.id, item.size, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => onChangeQuantity(item.id, item.size, 1)}>+</button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="price-box total-row">
          <span>총 결제 금액</span>
          <strong>{totalAmount.toLocaleString()}원</strong>
        </div>

        <button className="secondary-btn" type="button" onClick={onCompleteOrder}>
          주문 완료
        </button>
      </div>
    </div>
  );
}

export default CartModal;
