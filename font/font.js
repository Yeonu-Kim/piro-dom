const slider = document.getElementById("text_slider");
const textContainer = document.querySelector(".text_container");

const texts = textContainer.children;

// console.log(texts);

slider.addEventListener("input", (event) => {
  // console.log(event);
  Array.from(texts).map((text) => {
    text.style.fontWeight = event.target.value * 10;
  });
});
