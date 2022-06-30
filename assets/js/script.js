const progress_bar = document.querySelector('.progress-bar-blue');
const prev_btn = document.querySelector('.prev-btn');
const next_btn = document.querySelector('.next-btn');
const steps = document.querySelectorAll('.steps');
let currentActive = 1;

next_btn.addEventListener("click", function () {
  currentActive++;
  if (currentActive > steps.length) {
    currentActive = steps.length;
  }
  console.log("next :" + currentActive);
  update();
});

prev_btn.addEventListener("click", function () {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  console.log("prev :" + currentActive);
  update();
});

function update() {
  steps.forEach(function (steps, index) {
    if (index < currentActive) {
      steps.classList.add('active');
    } else {
      steps.classList.remove('active');
    }
  });
  const actives = document.querySelectorAll('.active');
  progress_bar.style.width = (actives.length - 1) / (steps.length - 1) * 100 + '%';

  if (currentActive === 1) {
    prev_btn.disabled = true;
  } else if (currentActive === steps.length) {
    next_btn.disabled = true;
  } else {
    prev_btn.disabled = false;
    next_btn.disabled = false;
  }
}





















