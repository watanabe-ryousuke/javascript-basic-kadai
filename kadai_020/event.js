const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', () => {
  const h2 = document.getElementById('text');

  h2.textContent = 'ボタンをクリックしました';
});