// header object
const headerObject = document.querySelector("header");
const navObject = document.querySelector("header .wrapper ul");
// up button object
let upButton = document.querySelector(".up-button");

window.addEventListener("scroll", function () {
  // header color change
  if (window.scrollY > 3) {
    headerObject.style.backgroundColor = "#fff";
    navObject.classList.add("moved");
  } else {
    headerObject.style.backgroundColor = "transparent";
    navObject.classList.remove("moved");
  }
  // up button work
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
});

//upButton on click
upButton.onclick = function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
