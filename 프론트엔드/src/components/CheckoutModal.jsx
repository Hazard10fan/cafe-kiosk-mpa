import React from 'react';

function CheckoutModal({ isOpen, onClose, totalAmount, orderItems }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <div className="modal-header">
          <h2>현장 결제</h2>
          <button className="modal-close" onClick={onClose} type="button">×</button>
        </div>
        <p className="modal-description">카드를 넣어주세요. 현장 결제 방식으로 주문을 확인합니다.</p>

        <div className="order-summary-list">
          {orderItems.map((item) => (
            <div key={`${item.id}-${item.size}`} className="order-summary-item">
              <span>{item.name} ({item.size})</span>
              <strong>{item.quantity}개</strong>
            </div>
          ))}
        </div>

        <div className="price-box total-row">
          <span>최종 결제 금액</span>
          <strong>{totalAmount.toLocaleString()}원</strong>
        </div>

        <div className="payment-guide-box">
          <strong>카드를 넣어주세요</strong>
          <span>카드가 인식되면 결제가 진행됩니다.</span>
        </div>

        <button className="primary-btn" onClick={onClose} type="button">
          확인
        </button>
      </div>
    </div>
  );
}

export default CheckoutModal;
