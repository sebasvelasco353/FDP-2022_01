
// Animaciones
gsap.from('.Menu1', {y: '-100%', duration: 1, ease: 'bounce'})
gsap.from('.pie1', {y: '100%', duration: 1, ease: 'bounce'})
gsap.from('.piec2',{duration: 3, opacity: 0})
gsap.from('#datos2',{duration: 3, opacity: 0})

// Functiones
// function verficando_datos(){
//     let timerInterval
// Swal.fire({
//   title: 'Verificando Datos',
//   html: 'Por favor espere solo tarda <b></b> milisegundos.',
//   timer: 2000,
//   timerProgressBar: true,
//   didOpen: () => {
//     Swal.showLoading()
//     const b = Swal.getHtmlContainer().querySelector('b')
//     timerInterval = setInterval(() => {
//       b.textContent = Swal.getTimerLeft()
//     }, 100)
//   },
//   willClose: () => {
//     clearInterval(timerInterval)
//   }
// }).then((result) => {
//   /* Read more about handling dismissals below */
//   if (result.dismiss === Swal.DismissReason.timer) {
//   }
// })
// }

function datos_console(){
    nombre= document.getElementById('nombre').value;
    telefono= document.getElementById('telefono').value;
    correo= document.getElementById('correo').value;
    mensaje= document.getElementById('mensaje').value;
    console.group("Datos ingresados por el usuario");
    console.log("Nombre:",nombre);
    console.log("Telefono:",telefono);
    console.log("Correo electronico:",correo);
    console.log("Mensaje:",mensaje);    
}

function Datos_enviados(){
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tus datos han sido envaidos correctamente',
        showConfirmButton: false,
        timer: 1500
      })
}