document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelector('.project-cards');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  const cardWidth = projectCards.querySelector('.card').offsetWidth + 20; // 20はカード間のスペース
  const scrollWidth = projectCards.clientWidth / 2; // 一回のスクロール幅を設定
  const maxScrollLeft = projectCards.scrollWidth - projectCards.clientWidth;

  leftArrow.addEventListener('click', () => {
    projectCards.scrollBy({
      top: 0,
      left: -scrollWidth,
      behavior: 'smooth'
    });
    setTimeout(checkArrows, 300); // スクロール後に矢印の表示状態を更新
  });

  rightArrow.addEventListener('click', () => {
    projectCards.scrollBy({
      top: 0,
      left: scrollWidth,
      behavior: 'smooth'
    });
    setTimeout(checkArrows, 300); // スクロール後に矢印の表示状態を更新
  });

  function checkArrows() {
    leftArrow.style.display = projectCards.scrollLeft <= 0 ? 'none' : 'block';
    rightArrow.style.display = projectCards.scrollLeft >= maxScrollLeft ? 'none' : 'block';
  }

  // 初期表示の矢印の表示状態を設定
  checkArrows();
});