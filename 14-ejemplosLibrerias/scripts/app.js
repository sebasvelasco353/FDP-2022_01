x// Variables globales
const NAV_ITEMS = Array.from(document.getElementsByClassName('nav_item')); // hago un array de elementos html
const MENU_TL = gsap.timeline(); // Linea de tiempo de la animacion
var menuState = false;

// funciones
const toggleMenu = () => {
    if (!menuState) {
        MENU_TL.to('.header', {height: '100vh', textShadow: 'none', backgroundColor: 'white', color: 'black', duration: 1, ease: 'ease-in'});
        MENU_TL.to('.nav', {opacity: 1, duration: 1, ease: 'ease-in'}, "-=0.5");
        for (let i = 0; i < NAV_ITEMS.length; i++) {
            const element = NAV_ITEMS[i];
            MENU_TL.from(element, {x: -250, opacity: 0, duration: 0.8}, "-=0.5");
        }
    } else {
        for (let i = NAV_ITEMS.length; i >= 0; i--) {
            const element = NAV_ITEMS[i];
            MENU_TL.to(element, {x: 250, opacity: 0, duration: 0.8}, '-=0.5');
        }
        MENU_TL.to('.nav', {opacity: 0, duration: 1, ease: 'ease-in-out'}, "-=0.2");
        MENU_TL.to('.header', {height: 60, color: '#fff',  backgroundColor: 'transparent', textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa', duration: 1, ease: 'ease-in-out'}, "-=1");
    }
    menuState = !menuState;
}
