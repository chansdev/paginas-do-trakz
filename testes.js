const sliders = document.querySelectorAll(".nota");
console.log(sliders);

sliders.forEach((e) => {
  e.addEventListener("input", () => {
    let val = ((e.value - e.min) / (e.max - e.min)) * 100;
    e.style.background = `linear-gradient(to right, #320000 ${val}%, white ${val}%)`;
  });
});
