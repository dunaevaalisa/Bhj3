const menuLink = document.getElementsByClassName(" menu__link");
const menu = document.getElementsByClassName("menu")
const mainMenu = document.getElementsByClassName("menu_main");
const menuItem = document.getElementsByClassName("menu__item");

menuLink.onclick = function() {
  return false;
}

let closestMenu = document.closest("li");
let menuMainItems = document.querySelectorAll("menu menu_main");

mainMenu.onclcik = function() {
  if (closestMenu == true) {
    menuItem.classList.add("menu_active");
  }
}


