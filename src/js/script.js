import "/src/sass/style.scss";

const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

const counters = document.querySelectorAll(".skills__progress-procent"),
  lines = document.querySelectorAll(".skills__progress__procent-completed");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
