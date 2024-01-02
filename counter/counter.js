const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const countText = document.getElementById('cnt');

// click 이벤트가 발생 -> 어떤 동작 실행
// 여기서 말하는 동작 -> 함수
// 이 함수는 countText 안에 있는 숫자를 가져와서, +1 -1

minusBtn.addEventListener('click', () => {
  countText.innerText = Number(countText.innerText) - 1;
})
plusBtn.addEventListener('click', () => {
  countText.innerText = Number(countText.innerText) + 1;
})