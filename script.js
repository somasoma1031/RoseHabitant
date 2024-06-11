document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelector('.project-cards');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  // スクロール機能がある場合
  if (projectCards) {
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
  }

  // メニューのトグル機能
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });

  // タスクバーのリンクをクリックしたときの挙動を設定
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href').substring(1); // 修正：substring(2) -> substring(1)
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('active'); // メニューを閉じる
      }
    });
  });
});