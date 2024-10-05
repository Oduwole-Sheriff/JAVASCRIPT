document.addEventListener('DOMContentLoaded', () => {
  // Select the elements
  const hamburger = document.querySelector(".hamburger");
  const thirdNav = document.querySelector(".third-nav");

  // Check if elements are selected properly
  if (!hamburger || !thirdNav) {
      console.error("Elements not found");
      return;
  }

  // Add event listener to the hamburger menu
  hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      thirdNav.classList.toggle("active");
  });

  // Initialize Swiper
  const swiper = new Swiper('.swiper', {
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      },
      loop: true, 
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });
});
