const navBurger = document.querySelector(".burger");
const navLinks = document.querySelector(".mid-nav");
const modal = document.getElementById("myModal");
const btns = document.querySelectorAll(".myBtn");

function navActiveToggler() {
  navLinks.classList.toggle("mid-nav__active");
  // console.log("hey");
}

navBurger.addEventListener("click", navActiveToggler);

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    modal.style.display = "block";
  });
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
