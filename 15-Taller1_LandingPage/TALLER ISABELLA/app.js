/*NAV*/
window.addEventListener("scroll",function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0)
})

/*CARDS*/ 

gsap.from('.container', {duration:1, x:'-100vw', delay: 0.5 , ease: 'power2.in'})


/*FORMULARIO*/

gsap.from('.form-register', {duration:1, x:'-100vw', delay: 0.5, ease: 'power2.in'})

/*CALL TO ACTION*/

gsap.from('.form', { duration:1, x:'-100vw', delay:0.5, ease:'power2.in'})

gsap.from('.form__container', {duration:1.5, x:'-100%', delay: 0.5, ease:'power2.in'})

/*FOOTER*/

gsap.from('.footer', {duration:0.7, y:'-100%', ease:'bounce'})

gsap.from('.elementos', {duration:0.3, y: '-100%', opacity:0, delay: 0.5, })

gsap.from('.aboutus', {duration:2, y:'-100', opacity: 0, delay: 0.5,})






