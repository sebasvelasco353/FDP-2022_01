//Nav activo en el scroll
const Nav = document.querySelector('.Nav');
    window,addEventListener('scroll', function(){
        Nav.classList.toggle('active', window.scrollY >0)
    })

//Gsap
gsap.registerPlugin(ScrollTrigger);

gsap.from('.Header', { duration: 2.5, opacity: '0', y:'-100%', ease: "power4.Out", ScrollTrigger:'.Logo'})
gsap.from('.Logo', { duration: 3, opacity: '0', delay: 2, ScrollTrigger:'.Logo'})
gsap.from('.Menú', { duration: 3, opacity: '0', delay: 2, ScrollTrigger:'.Menú'})
gsap.from('.Textos-header', { duration: 2.5, opacity: '0', x:'-30%', delay: 2.2, ScrollTrigger:'.Logo'})
gsap.from('.CTA, .CTA2', { duration: 2.5, opacity: '0', x:'-60%', delay: 2.2, ScrollTrigger:'.Logo'})

/*gsap.from('.AboutUs', { duration: 2.5, opacity: '0', x:'10%', ScrollTrigger:'.AboutUs'})
gsap.from('.AboutUs-Text', { duration: 2.5, opacity: '0', x:'10%', ScrollTrigger:'.AboutUs'})
gsap.from('.Img3, .Text3', { duration: 2.5, opacity: '0', x:'-200%', ease: "expo.inOut", ScrollTrigger:'.Cards-3'})
gsap.from('.Img2, .Text2', { duration: 2.5, opacity: '0', x:'-200%', delay: 0.8, ease: "expo.inOut", ScrollTrigger:'.Cards-3'})
gsap.from('.Img1, .Text1', { duration: 2.5, opacity: '0', x:'-140%', delay: 1.2, ease: "expo.inOut", ScrollTrigger:'.Cards-3'})*/

gsap.from('.PlantsInfo', { duration: 2.5, opacity: '0', ScrollTrigger:'.PlantsInfo'})
gsap.from('.PlantsTittle', { duration: 1.5, opacity: '0', x:'-10%', ScrollTrigger:'.PlantsTittle'})
gsap.from('.PlantsText', { duration: 1.5, opacity: '0', x:'-10%', ScrollTrigger:'.PlantsTittle'})

gsap.from('.Form', { duration: 2.5, opacity: '0', ScrollTrigger:'.Form'})

//Funciones de los alert
function ContactUs() {

    if (document.getElementById("Name").value===''|| document.getElementById("Email").value==='' || document.getElementById("Message").value===''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong. You have to fill in all the required fields',
              })
    }else{
        Swal.fire({
        icon: 'success',
        title: 'Great!',
        text: 'We will be in contact with you soon',
        showConfirmButton: true,
      })
    }
}

function Thanks() {
    Swal.fire({
        title: 'Great!',
        text: 'Now you are one step closer to giving your life a unique touch',
        iconHtml: '<img src="Img/IconHeart.png">',
        showConfirmButton: true,
        customClass: {
            icon: 'no-border'}
    })
}

/*Navegación
document.querySelectorAll(".Menú li").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:{y:"#Section" + (index + 1), offsetY:70}});
    });
  });*/