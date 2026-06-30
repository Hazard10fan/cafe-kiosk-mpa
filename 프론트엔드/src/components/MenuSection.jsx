import React from 'react';

function MenuSection({ categories, activeCategory, filteredMenu, selectedItem, onSelectCategory, onSelectItem, onMessage }) {
  return (
    <section className="menu-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">메뉴 선택</p>
          <h2>원하는 메뉴를 고르세요.</h2>
        </div>
        <span className="pill">오늘의 추천</span>
      </div>

      <div className="category-row">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-chip ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-list">
        {filteredMenu.map((item) => (
          <button
            key={item.id}
            className={`menu-card ${selectedItem?.id === item.id ? 'active' : ''}`}
            onClick={() => onSelectItem(item)}
          >
            <div className="menu-card__emoji">{item.emoji}</div>
            <div className="menu-card__body">
              <div className="menu-card__title-row">
                <h3>{item.name}</h3>
                <span className="menu-tag">{item.tag}</span>
              </div>
              <p>{item.description}</p>
              <strong>{item.price.toLocaleString()}원</strong>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
