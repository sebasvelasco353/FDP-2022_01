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


const links = document.querySelectorAll(".Nav_Link");

links.forEach((item)=>{
    item.addEventListener('click', ()=>
    {
        let el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth",block:"start"});
    })
})

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