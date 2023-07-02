document.getElementById("hamburger").addEventListener("click", function () {
  document.querySelector(".navbarr").style.display = "none";
  document.querySelector(".mobile-nav").style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
});

document
  .querySelector(".bi.bi-x-square")
  .addEventListener("click", function () {
    document.querySelector(".navbarr").style.display = "flex";
    document.querySelector(".mobile-nav").style.display = "none";
    document.querySelector("body").style.overflowY = "scroll";
  });
