let hamburger = document.querySelector(".hamburger");
let toggleMenu = document.querySelector(".toggle-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    toggleMenu.classList.toggle("active");
})

// Accordion section

const Accordion = document.querySelectorAll(".accordion-sec");

Accordion.forEach( Accordion => {
    Accordion.addEventListener("click", () => {
        Accordion.classList.toggle("active");
    })
})