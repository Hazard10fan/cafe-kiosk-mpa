import React from 'react';

function SelectedItemPane({ selectedItem, sizes, selectedSize, unitPrice, onSelectSize, onAddToCart, message }) {
  return (
    <div className="selected-item-card">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">선택한 메뉴</p>
          <h2>{selectedItem?.name ?? '메뉴를 선택해 주세요'}</h2>
        </div>
        <span className="summary-badge">주문 준비</span>
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
            type="button"
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

      <button className="primary-btn" onClick={onAddToCart} type="button">
        장바구니 담기
      </button>

      <div className="message-box">{message}</div>
    </div>
  );
}

export default SelectedItemPane;
