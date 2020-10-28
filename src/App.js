import React, { useLayoutEffect, useRef } from 'react';
import './App.css';

function App() {
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const sneakerRef = useRef(null);
  const purchaseRef = useRef(null);
  const allHalfSecondEase = `all 0.5s ease`;

  useLayoutEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;

    const skewCard = (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };

    container.addEventListener('mousemove', skewCard);
    return () => {
      container.removeEventListener('mousemove', skewCard);
    };
  }, []);

  useLayoutEffect(() => {
    const easeInCard = () => {
      const title = titleRef.current;
      const sneaker = sneakerRef.current;
      const purchase = purchaseRef.current;
      cardRef.current.style.transition = allHalfSecondEase;
      title.style.transition = allHalfSecondEase;
      sneaker.style.transition = allHalfSecondEase;
      purchase.style.transition = allHalfSecondEase;
      title.style.transform = `translateZ(50px)`;
      purchase.style.transform = `translateZ(50px)`;
      sneaker.style.transform = `translateZ(100px)`;
    };

    const container = containerRef.current;
    container.addEventListener('mouseenter', easeInCard);
    return () => {
      container.removeEventListener('mouseenter', easeInCard);
    };
  }, [allHalfSecondEase]);

  useLayoutEffect(() => {
    const easeOutCard = () => {
      const card = cardRef.current;
      const title = titleRef.current;
      const sneaker = sneakerRef.current;
      const purchase = purchaseRef.current;
      card.style.transition = allHalfSecondEase;
      title.style.transition = allHalfSecondEase;
      sneaker.style.transition = allHalfSecondEase;
      purchase.style.transition = allHalfSecondEase;
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      title.style.transform = `translateZ(0px)`;
      sneaker.style.transform = `translateZ(0px)`;
      purchase.style.transform = `translateZ(0px)`;
    };

    const container = containerRef.current;
    container.addEventListener('mouseleave', easeOutCard);
    return () => {
      container.removeEventListener('mouseleave', easeOutCard);
    };
  }, [allHalfSecondEase]);

  return (
    <div className="container" ref={containerRef}>
      <div className="card" ref={cardRef}>
        <div className="sneaker">
          <div className="circle"></div>
          <img ref={sneakerRef} src="./zero_grand.png" alt="zero grand shoe" />
        </div>
        <div className="info">
          <h1 ref={titleRef} className="title">
            ZERO GRAND by COLE HAAN
          </h1>
          <h3>We #WriteNewRules for footwear. You do it for the world.</h3>
          <div className="sizes">
            <button>9</button>
            <button className="active">9.5</button>
            <button>10</button>
            <button>10.5</button>
          </div>
          <div ref={purchaseRef} className="purchase">
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
