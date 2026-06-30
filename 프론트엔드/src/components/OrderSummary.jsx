import React from 'react';

function OrderSummary({
  selectedItem,
  sizes,
  selectedSize,
  unitPrice,
  onSelectSize,
  onAddToCart,
  message,
  cart,
  onChangeQuantity,
  totalAmount,
  onCompleteOrder,
}) {
  return (
    <div className="summary-card">
      <div className="summary-card__header">
        <div>
          <p className="eyebrow">선택한 메뉴</p>
          <h2>{selectedItem?.name ?? '메뉴를 선택해 주세요'}</h2>
        </div>
        <span className="summary-badge">주문 중</span>
      </div>

      <p className="summary-description">
        {selectedItem?.description ?? '원하는 음료를 선택하면 상세 옵션이 표시됩니다.'}
      </p>

      <div className="size-row">
        {sizes.map((size) => (
          <button
            key={size.label}
            className={`size-btn ${selectedSize === size.label ? 'active' : ''}`}
            onClick={() => onSelectSize(size.label)}
          >
            {size.label}
            {size.price > 0 ? ` (+${size.price.toLocaleString()}원)` : ''}
          </button>
        ))}
      </div>

      <div className="price-box">
        <span>단가</span>
        <strong>{unitPrice.toLocaleString()}원</strong>
      </div>

      <button className="primary-btn" onClick={onAddToCart}>
        장바구니 담기
      </button>

      <div className="message-box">{message}</div>

      <div className="cart-box">
        <div className="cart-box__header">
          <h3>장바구니</h3>
          <span>{cart.length}개</span>
        </div>

        {cart.length === 0 ? (
          <p className="empty-text">선택한 메뉴가 없습니다.</p>
        ) : (
          cart.map((item) => (
            <div key={`${item.id}-${item.size}`} className="cart-item">
              <div>
                <strong>{item.name}</strong>
                <p>
                  {item.size} · {item.price.toLocaleString()}원
                </p>
              </div>
              <div className="cart-item__actions">
                <button onClick={() => onChangeQuantity(item.id, item.size, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onChangeQuantity(item.id, item.size, 1)}>+</button>
              </div>
            </div>
          ))
        )}

        <div className="price-box total-row">
          <span>총 결제 금액</span>
          <strong>{totalAmount.toLocaleString()}원</strong>
        </div>

        <button className="secondary-btn" onClick={onCompleteOrder}>
          주문 완료
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
