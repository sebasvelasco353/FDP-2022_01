//Animaciones
gsap.registerPlugin(ScrollTrigger);

gsap.from('.header', { duration: 1, y: '-100%', ease: 'power3.inOut'})
gsap.from('.Logo', { duration: 1.5, opacity: '0', delay:1.5})
gsap.from('.Nave', { duration: 1.5, opacity: '0', delay:1.5})

gsap.from('.Bienvenida', { duration: 2, y: '-100%', ease: 'power3.inOut'})
gsap.from('#ImgBienvenida', { duration: 1.5, y:'-10%', opacity: '0', delay:1.5})
gsap.from('#Presentacion', { duration: 1.5, x:'10%', opacity: '0', delay:1.5})

gsap.from('#Acerca', { duration: 1.5, x:'-10%', opacity: '0', stagger:0.3, scrollTrigger:'#Acerca'})
gsap.from('#ImgQuienes', { duration: 1.5, x:'10%', opacity: '0', stagger: 0.3, scrollTrigger:'#ImgQuienes'})

gsap.from('#CardT', { duration: 1.5, y:'-10%', opacity: '0', stagger: 0.3, scrollTrigger:'#CardT'})
gsap.from('.card', { duration: 1.5, y: '-20%', ease: 'power4.out', stagger:0.3, opacity:0, scrollTrigger:'#Card'})

gsap.from('.T2', { duration: 1.5, x:'-10%', opacity: '0', stagger:0.3, scrollTrigger:'.T2'})
gsap.from('.info', { duration: 1.5, x:'-10%', opacity: '0', stagger:0.3, scrollTrigger:'.info'})
gsap.from('#Formulario', { duration: 1.5, x:'10%', opacity: '0', stagger:0.3, scrollTrigger:'.Formulario'})

//Navegación de la página
const links = document.querySelectorAll(".Nav_Link");

links.forEach((item)=>{
    item.addEventListener('click', ()=>
    {
        let el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth",block:"start"});
    })
})

//Mensaje Popup de productos
const openPopupButtons = document.querySelectorAll('[data-popup-target]')

const closePopupButtons = document.querySelectorAll('[data-close-button]')

const overlay = document.getElementById('overlay')

openPopupButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const popup = document.querySelector(button.dataset.popupTarget)
        openPopup(popup)
    })
})

closePopupButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const popup = button.closest('.popup')
        closePopup(popup)
    })
})

function openPopup(popup){
    if (popup == null) return
    popup.classList.add('active')
    overlay.classList.add('active')
}

function closePopup(popup){
    if (popup == null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
}

//Mensaje popup de formulario
const openPopupEButtons = document.querySelectorAll('[data-popupE-target]')

const closePopupEButtons = document.querySelectorAll('[data-closeE-button]')

openPopupEButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const popupE = document.querySelector(button.dataset.popupETarget)
        openPopupE(popupE)
    })
})

closePopupEButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const popupE = button.closest('.popupE')
        closePopupE(popupE)
    })
})


function openPopupE(popupE){
    if (popupE == null) return
    popupE.classList.add('active')
    overlay.classList.add('active')
    }

function closePopupE(popupE){
    if (popupE == null) return
    popupE.classList.remove('active')
    overlay.classList.remove('active')
}

document.getElementById("#Enviar").addEventListener("click", function(event){
    event.preventDefault()
  });



//Console log
function datos() {
    var Nombre = document.getElementById("Nombre").value;
    var Teléfono = document.getElementById("Teléfono").value;
    var Correo = document.getElementById("Correo").value;
    var Mensaje = document.getElementById("Mensaje").value;

    {
        console.log("Nombre: " + Nombre);
        console.log("Teléfono: " + Teléfono);
        console.log("Correo electrónico: " + Correo);
        console.log("Mensaje: " + Mensaje);
        console.log("___________________"); 
    }
return;
}

function enviado(){
    if (Nombre.value===''|| Teléfono.value==='' || Correo.value===''){
        document.getElementById('Enviado').style.display='none';
    }else{
        document.getElementById('Enviado').style.display='block';
    }
}