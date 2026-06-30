import React, { useMemo, useState, useEffect } from 'react';
import { categories, menuItems, sizes } from './data/menuData';
import HeroHeader from './components/HeroHeader';
import MenuSection from './components/MenuSection';
import SelectedItemModal from './components/SelectedItemModal';
import CartModal from './components/CartModal';
import CheckoutModal from './components/CheckoutModal';
import ToastMessage from './components/ToastMessage';

function App() {
  const [activeCategory, setActiveCategory] = useState('커피');
  const [selectedId, setSelectedId] = useState(1);
  const [selectedSize, setSelectedSize] = useState('레귤러');
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState({ message: '', isVisible: false });
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const filteredMenu = useMemo(
    () => menuItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const selectedItem = useMemo(
    () => filteredMenu.find((item) => item.id === selectedId) ?? filteredMenu[0] ?? menuItems[0],
    [filteredMenu, selectedId]
  );

  const selectedSizeInfo = sizes.find((size) => size.label === selectedSize) ?? sizes[0];
  const unitPrice = (selectedItem?.price ?? 0) + selectedSizeInfo.price;
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    if (!toast.message) return;

    const timer = setTimeout(() => setToast({ message: '', isVisible: false }), 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  const showToast = (message) => {
    setToast({ message, isVisible: true });
  };

  const addToCart = () => {
    if (!selectedItem) return;

    setCart((prev) => {
      const existingItem = prev.find(
        (item) => item.id === selectedItem.id && item.size === selectedSize
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === selectedItem.id && item.size === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          id: selectedItem.id,
          name: selectedItem.name,
          size: selectedSize,
          price: unitPrice,
          quantity: 1,
          emoji: selectedItem.emoji,
        },
      ];
    });

    showToast(`${selectedItem.name} ${selectedSize}가 장바구니에 담겼습니다.`);
  };

  const changeQuantity = (targetId, targetSize, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === targetId && item.size === targetSize
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const completeOrder = () => {
    if (cart.length === 0) {
      showToast('장바구니에 담긴 메뉴가 없습니다.');
      return;
    }

    setCartModalOpen(false);
    setCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setCheckoutOpen(false);
    setCart([]);
    showToast('주문이 완료되었습니다. 감사합니다!');
  };

  const handleSelectCategory = (category) => {
    setActiveCategory(category);
    setSelectedId(menuItems.find((item) => item.category === category)?.id ?? 1);
  };

  const handleSelectItem = (item) => {
    setSelectedId(item.id);
    setMenuModalOpen(true);
    showToast(`${item.name}를 선택했습니다.`);
  };

  const openMenuModal = () => setMenuModalOpen(true);
  const closeMenuModal = () => setMenuModalOpen(false);
  const openCartModal = () => setCartModalOpen(true);
  const closeCartModal = () => setCartModalOpen(false);

  return (
    <div className="app-shell">
      <HeroHeader />

      <main className="content-grid">
        <MenuSection
          categories={categories}
          activeCategory={activeCategory}
          filteredMenu={filteredMenu}
          selectedItem={selectedItem}
          onSelectCategory={handleSelectCategory}
          onSelectItem={handleSelectItem}
        />

        <aside className="summary-panel">
          <div className="summary-card">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">주문 도우미</p>
                <h2>모달에서 메뉴를 확인하세요.</h2>
              </div>
              <span className="summary-badge">{cart.length}개</span>
            </div>

            <p className="summary-description">
              메뉴 선택과 주문 내역 확인은 모달창에서 빠르게 확인할 수 있습니다.
            </p>

            <div className="button-stack">
              <button className="primary-btn" type="button" onClick={openMenuModal}>
                선택한 메뉴 보기
              </button>
              <button className="secondary-btn" type="button" onClick={openCartModal}>
                주문 내역 보기
              </button>
            </div>

            <div className="price-box">
              <span>총 결제 금액</span>
              <strong>{totalAmount.toLocaleString()}원</strong>
            </div>
          </div>
        </aside>
      </main>

      <SelectedItemModal
        isOpen={menuModalOpen}
        onClose={closeMenuModal}
        selectedItem={selectedItem}
        sizes={sizes}
        selectedSize={selectedSize}
        unitPrice={unitPrice}
        onSelectSize={setSelectedSize}
        onAddToCart={addToCart}
        message={toast.isVisible ? toast.message : '메뉴를 선택하고 옵션을 조정하세요.'}
      />

      <CartModal
        isOpen={cartModalOpen}
        onClose={closeCartModal}
        cart={cart}
        onChangeQuantity={changeQuantity}
        totalAmount={totalAmount}
        onCompleteOrder={completeOrder}
      />

      <CheckoutModal isOpen={checkoutOpen} onClose={closeCheckout} totalAmount={totalAmount} orderItems={cart} />
      <ToastMessage message={toast.message} isVisible={toast.isVisible} />
    </div>
  );
}

export default App;
