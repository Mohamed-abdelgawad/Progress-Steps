const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const cricles = document.querySelectorAll(".cricle");

let currnetActive = 1;

next.addEventListener("click", () => {
  currnetActive++;
  if (currnetActive > cricles.length) {
    currnetActive = cricles.length;
  }
  update();
  console.log(currnetActive);
});

prev.addEventListener("click", () => {
  currnetActive--;
  if (currnetActive < 1) {
    currnetActive = cricles.length;
  }
  update();
});

function update() {
  cricles.forEach((cricle, idx) => {
    if (idx < currnetActive) {
      cricle.classList.add("active");
    } else {
      cricle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (cricles.length - 1)) * 100 + "%";
  if (currnetActive === 1) {
    prev.disabled = true;
  } else if (currnetActive === cricles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
