let menuForm = document.getElementById("menuform");
let menuButton = document.getElementById("menubutton");
let nav = document.getElementById("menunav");
let menuClosed = true;

function openMenu(event) {
    event.preventDefault();
    if (menuClosed) {
        nav.setAttribute("class","mobileopen");
        menuClosed = false;
        menuButton.innerHTML = "-";
    } else {
        nav.setAttribute("class","mobileclosed");
        menuClosed = true;
        menuButton.innerHTML = "+";
    }
}

menuForm.addEventListener("submit", openMenu);