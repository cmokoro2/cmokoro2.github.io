let menuForm = document.getElementById("menuform");
let menuButton = document.getElementById("menubutton");
let nav = document.getElementById("menunav");
let menuClosed = true;

function openMenu(event) {
    event.preventDefault();
    if (menuClosed) {
        nav.setAttribute("class","mobileopen");
        menuClosed = false;
    } else {
        nav.setAttribute("class","mobileclosed");
        menuClosed = true;
    }
}

menuForm.addEventListener("submit", openMenu);