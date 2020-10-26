import React, { useEffect } from 'react';
import './App.css';

function App() {
  const card = document?.querySelector('.card');
  const container = document?.querySelector('.container');
  const title = document.querySelector('.title');
  const sneaker = document.querySelector('.sneaker img');
  const purchase = document.querySelector('.purchase button');
  const allHalfSecondEase = `all 0.5s ease`;

  useEffect(() => {
    const skewCard = (e) => {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };

    container.addEventListener('mousemove', skewCard);
  }, [card.style, container]);

  // useEffect(() => {
  //   const easeInCard = () => {
  //     card.style.transition = allHalfSecondEase;
  //     title.style.transition = allHalfSecondEase;
  //     sneaker.style.transition = allHalfSecondEase;
  //     purchase.style.transition = allHalfSecondEase;
  //     title.style.transform = `translateZ(50px)`;
  //     purchase.style.transform = `translateZ(50px)`;
  //     sneaker.style.transform = `translateZ(100px)`;
  //   };

  //   container.addEventListener('mouseenter', easeInCard);
  //   return container.removeEventListener('mouseenter', easeInCard);
  // }, [
  //   container,
  //   card.style,
  //   allHalfSecondEase,
  //   purchase.style,
  //   sneaker.style,
  //   title.style,
  // ]);

  return (
    <div className="container">
      <div className="card">
        <div className="sneaker">
          <div className="circle"></div>
          <img src="./zero_grand.png" alt="zero grand shoe" />
        </div>
        <div className="info">
          <h1 className="title">ZERO GRAND by COLE HAAN</h1>
          <h3>We #WriteNewRules for footwear. You do it for the world.</h3>
          <div className="sizes">
            <button>8.5</button>
            <button className="active">9</button>
            <button>10</button>
            <button>10.5</button>
          </div>
          <div className="purchase">
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
