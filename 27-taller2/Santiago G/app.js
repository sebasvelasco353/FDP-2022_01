const url = 'https://raw.githubusercontent.com/Santygr21/FDP-2022_01/main/27-taller2/user.json'; 

document.getElementById("icon_menu").addEventListener("click", movement_menu);

var menu_side = document.getElementById("menu_side");
var icon_menu = document.getElementById("icon_menu");
var body = document.getElementById("body");

function movement_menu(){
    body.classList.toggle("menu__animation");
    menu_side.classList.toggle("menu_side_animation");
}