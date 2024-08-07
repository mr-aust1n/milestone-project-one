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
  var swiperBG = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is <= 820px
      820: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is > 821px
      821: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});

//SWIPER BOTTOM

// SCROLL CLOSE TOP

function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.right === "0px") {
    menu.style.right = "-750px";
    menu.classList.remove("toggled");
  } else {
    menu.style.right = "0px";
    menu.classList.add("toggled");
  }
}

document.addEventListener("scroll", function (e) {
  var menu = document.getElementById("menu");
  if (menu.classList.contains("toggled")) {
    toggleMenu();
  }
});

// READ MORE

document.querySelectorAll(".service-box .read-more").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const content = this.previousElementSibling;
    content.classList.toggle("expanded");
    if (content.classList.contains("expanded")) {
      this.textContent = "READ LESS";
    } else {
      this.textContent = "READ MORE";
    }
  });
});
