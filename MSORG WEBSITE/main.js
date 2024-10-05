// hamburger
let hamburger = document.querySelector(".hamburger");
let toggleMenu = document.querySelector(".toggle-menu");
let toggle = document.querySelector(".toggle");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    toggleMenu.classList.toggle("active");
    toggle.classList.toggle("active");
})

// carousel
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });



