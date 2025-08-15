const sliders = document.querySelectorAll(".nota");
console.log(sliders);

function setInputBg(input) {
  let val = ((input.value - input.min) / (input.max - input.min)) * 100;
  input.style.background = `linear-gradient(to right, #320000 ${val}%, white ${val}%)`;
}

sliders.forEach((e) => {
  e.addEventListener("input", setInputBg(e));
});

const btsMenos = document.querySelectorAll(".bt-");
const btsMais = document.querySelectorAll(".btPlus");

btsMenos.forEach((bt, index) => {
  bt.addEventListener("click", () => {
    sliders[index].value = +sliders[index].value - 1;
    setInputBg(sliders[index]);
  });
});

btsMais.forEach((bt, index) => {
  bt.addEventListener("click", () => {
    sliders[index].value = +sliders[index].value + 1;
    setInputBg(sliders[index]);
  });
});
