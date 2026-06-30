import React from 'react';

function HeroHeader() {
  return (
    <>
      <header className="topbar">
        <div>
          <p className="eyebrow">KIOSK COFFEE</p>
          <h1>오늘의 커피를 빠르게 주문해보세요.</h1>
        </div>
        <div className="topbar__badge">매장 식사 · 포장 가능</div>
      </header>

      <section className="hero-card">
        <div>
          <p className="eyebrow">오늘의 추천</p>
          <h2>따뜻한 한 잔과 달콤한 디저트로 쉬어가세요.</h2>
        </div>
        <div className="hero-card__info">
          <span>영업 중</span>
          <strong>10:00 ~ 22:00</strong>
        </div>
      </section>
    </>
  );
}

export default HeroHeader;
