var btn_arepa = document.getElementById("btn_arepa");
var arepa1 = document.getElementById("arepa1");
var btn_arepas = document.getElementById("btns_arepas");
var arepa_info = document.getElementById("arepa_info");


btn_arepa.addEventListener("click",function arepa() {
    desplegarBtnsArepa();
});

function desplegarBtnsArepa() {
    if(btn_arepas.style.display === "none"){
        btn_arepas.style.display = "block"
    } else {
        btn_arepas.style.display = "none"
    }
}

arepa1.addEventListener("click",function a1() {
    MostrarA1();
});

function MostrarA1() {
    if(arepa_info.style.display === "none"){
        arepa_info.style.display = "block"
    } else {
        arepa_info.style.display = "none"
}}