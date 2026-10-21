// contact form
const contactForm =document.querySelector("#contactForm");
contactForm.addEventListener('submit',(e) =>{
e.preventDefault();

const name =document.querySelector("#name").value.trim();
alert(`thank You ,${name} ! Your Form is ready to be connected`);

contactForm.reset();  

});


// humburger
const burger = document.querySelector("#burger");
const navMenu = document.querySelector("#navMenu");
const navLinks = document.querySelectorAll(".nav-link, .nav-cta");

function closeMenu() {
  burger.classList.remove("active");
  navMenu.classList.remove("show");

  burger.setAttribute("aria-expanded", "false");
  burger.setAttribute("aria-label", "Open navigation menu");
}

burger.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("show");

  burger.classList.toggle("active", isOpen);
  burger.setAttribute("aria-expanded", String(isOpen));
  burger.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});