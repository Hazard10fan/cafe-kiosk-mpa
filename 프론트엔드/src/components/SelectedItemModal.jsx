import React from 'react';

function SelectedItemModal({
  isOpen,
  onClose,
  selectedItem,
  sizes,
  selectedSize,
  unitPrice,
  onSelectSize,
  onAddToCart,
  message,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <div className="modal-header">
          <div>
            <p className="eyebrow">선택한 메뉴</p>
            <h2>{selectedItem?.name ?? '메뉴를 선택해 주세요'}</h2>
          </div>
          <button className="modal-close" type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <p className="summary-description">
          {selectedItem?.description ?? '원하는 음료를 선택하면 상세 옵션이 표시됩니다.'}
        </p>

        <div className="size-row">
          {sizes.map((size) => (
            <button
              key={size.label}
              type="button"
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

        <button className="primary-btn" type="button" onClick={onAddToCart}>
          장바구니 담기
        </button>

        <div className="message-box">{message}</div>
      </div>
    </div>
  );
}

export default SelectedItemModal;
