const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const lightModeToggle = document.querySelector(".dark-light-mode-toggle");
const githubLogo = document.querySelector(".github-logo");
const lightModeIcon = document.querySelector(".dark-light-icon");

let toggle = false;
const body = document.body;
const darkBackgroundColor = getComputedStyle(body).backgroundColor;
const darkTextColor = darkBackgroundColor;

lightModeToggle.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle) {
    // Light Mode
    githubLogo.classList.toggle("white-filter");
    body.style.backgroundColor = "white";
    body.style.color = darkBackgroundColor;
    lightModeIcon.src = "svgs/sun.png";
  } else {
    // Dark mode
    githubLogo.classList.toggle("white-filter");
    body.style.backgroundColor = darkBackgroundColor;
    body.style.color = "white";
    lightModeIcon.src = "svgs/moon.png";
  }
});

// Hamburger menu clicked
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Navigated through dropdown menu
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
