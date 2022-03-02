const paramenus = gsap.timeline();
var estadomenus = false;
var estadobanner = false;

const menus = () => {
if (!estadomenus) {
    paramenus.to(".bolita", {top:80, duration: 1});
    paramenus.to(".flecha",{rotate:180},"-=0.5");
    paramenus.to(".header", {top:0}, "-=0.7");
} else {
    paramenus.to(".header", {top:-100, duration: 1})
    paramenus.to(".flecha",{rotate: 0}, "-=0.5");
    paramenus.to(".bolita", {top:-30}, "-=0.7")
    
}
estadomenus=!estadomenus;
}
const trasimg = () =>{
    if (!estadobanner) {
        paramenus.to(".head-img", {top:-400, duration: 1, ease:"ease-in"});
    } else {
        paramenus.to(".head-img", {top:150, duration: 1, ease:"ease-out"});
    }
    estadobanner=!estadobanner;
}
