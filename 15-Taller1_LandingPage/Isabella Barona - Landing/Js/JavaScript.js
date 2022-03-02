function Enviare(){
    return(false);
}


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
    }}

function enviado(){
    if (Nombre.value===''|| Teléfono.value==='' || !Correo.value===''){
        document.getElementById('Enviado').style.display='none';
    }else{
        document.getElementById('Enviado').style.display='block';
    }
}