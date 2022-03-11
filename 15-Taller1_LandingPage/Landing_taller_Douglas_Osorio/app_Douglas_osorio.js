const paramenus = gsap.timeline();
const paramenus2 = gsap.timeline();
var estadomenus = false;
var estadobanner = false;
var estadocontacto = false;

const menus = () => {
if (!estadomenus) {
    paramenus.to(".bolita", {top:80, duration: 1});
    paramenus.to(".flecha",{rotate:180},"-=0.5");
    paramenus.to(".header", {top:0}, "-=0.7");
} else {
    paramenus.to(".header", {top:-120, duration: 1})
    paramenus.to(".flecha",{rotate: 0}, "-=0.5");
    paramenus.to(".bolita", {top:-15}, "-=0.7")
}
estadomenus=!estadomenus;
}
const trasimg = () =>{
    if (!estadobanner) {
        paramenus.to(".head-img", {top:-500, duration: 1, ease:"ease-in"});
    } else {
        paramenus.to(".head-img", {top:150, duration: 1, ease:"ease-out"});
    }
    estadobanner=!estadobanner;
}
const contacto = () =>{
    if (!estadocontacto) {
        paramenus2.to(".contact", {top:650, duration: 1});
        paramenus2.to(".fot", {top:-45, duration: 1});
    } else {
        paramenus2.to(".contact", {top:900, duration: 1})
        paramenus2.to(".fot", {top:45, duration: 1});
    }
    estadocontacto=!estadocontacto;
}
const mostrar = () =>{
    let serve = document.getElementById("service").value
    let nick = document.getElementById("nick").value
    let mail = document.getElementById("mail").value
    if (serve === "otro") {
        let servicio = prompt("En no más de 5 palabras describa el servicio que quiere");
        alert(`Usted ${nick} ha solicitado un servicio a razón de ${servicio}, espere a ser contactad@ a través del correo ${mail}. Gracias`)
    }else if(mail==""){
        alert("Por favor ingrese un correo de contacto")
    } 
    else {
        alert(`Usted ${nick}, ha solicitado un servicio por ${serve}, espere a ser contactad@ a través del correo ${mail}. Gracias`)
    }
}