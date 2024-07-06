// MOBILE MENU TOP
function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.right === "0px") {
    menu.style.right = "-750px";
  } else {
    menu.style.right = "0px";
  }
}

// MOBILE MENU BOTTOM

//SWIPER TOP

document.addEventListener("DOMContentLoaded", function () {
  // Swiper initialization
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is <= 767px
      767: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      // when window width is > 767px
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});

//SWIPER BOTTOM
