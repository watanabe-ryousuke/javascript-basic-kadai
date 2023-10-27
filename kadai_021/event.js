const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
  const h2 = document.getElementById('text');

  setTimeout(() => {
    h2.textContent = 'ボタンをクリックしました';
  }, 2000);
  });