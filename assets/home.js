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
