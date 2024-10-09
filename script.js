const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const lightModeToggle = document.querySelector(".dark-light-mode-toggle");
const githubLogo = document.querySelector(".github-logo");

let toggle = false;
const body = document.body;
const darkBackgroundColor = body.style.backgroundColor;

lightModeToggle.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle) {
    // Light Mode
    githubLogo.classList.toggle("white-filter");
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else {
    // Dark mode
    githubLogo.classList.toggle("white-filter");
    body.style.backgroundColor = darkBackgroundColor;
    body.style.color = "white";
  }
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
