// TODO: + 버튼을 눌렀을 때 값이 1 증가, - 버튼을 눌렀을 때 값이 1 감소

const minusButton = document.getElementById("minus_button");
const plusButton = document.getElementById("plus_button");
const counter = document.getElementById("counter");

// click 이벤트가 발생 -> 어떤 동작 실행
// 여기서 말하는 동작 -> 함수
// 이 함수는 countText 안에 있는 숫자를 가져와서, +1 -1

minusButton.addEventListener("click", () => {
  counter.innerText = Number(counter.innerText) - 1;
});
plusButton.addEventListener("click", () => {
  counter.innerText = Number(counter.innerText) + 1;
});
