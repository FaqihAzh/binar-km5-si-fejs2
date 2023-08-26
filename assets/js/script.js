// Hamburger Script
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".nav__hamburger");
  const menu = document.querySelector(".nav__menu");
  const hamburgerImage = hamburger.querySelector("img");

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
      hamburgerImage.src = "./assets/images/close.svg"; // Ganti dengan path gambar ikon silang
      hamburgerImage.style.transform = "rotate(180deg)";
    } else {
      hamburgerImage.src = "./assets/images/menu.svg"; // Ganti dengan path gambar ikon hamburger
      hamburgerImage.style.transform = "rotate(0deg)";
    }
  });
});

// Swiper Script
new Swiper("#swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 24,

  lazyLoading: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: "#nav-right",
    prevEl: "#nav-left",
  },
  breakpoints: {
    800: {
      slidesPerView: 1.5,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});
