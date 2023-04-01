const navBurger = document.querySelector(".burger");
const navLinks = document.querySelector(".mid-nav");
const modal = document.getElementById("myModal");
const btns = document.querySelectorAll(".myBtn");
const navigationBurger = document.getElementById("nav-burger");
const htmlElement = document.querySelector("html");
const body = document.querySelector("body");

function navActiveToggler() {
  navLinks.classList.toggle("mid-nav__active");
}

navBurger.addEventListener("click", navActiveToggler);

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    modal.style.display = "block";
    body.style.position = "fixed";
  });
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.position = "static";
  }
};

function navBarActiveHandler() {
  document.documentElement.scrollTop = 0;
  htmlElement.classList.toggle("overflow-h");
  navigationBurger.classList.toggle("burger__active");
}

navBurger.addEventListener("click", navBarActiveHandler);
