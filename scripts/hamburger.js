document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navUl = document.querySelector("nav ul");

  const toggleHamburger = () => {
    hamburger.classList.toggle("active");
    navUl.classList.toggle("active");
  };

  hamburger.addEventListener("click", toggleHamburger);
  // Add the event listener to each nav item
  navUl.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", toggleHamburger);
  });
});
