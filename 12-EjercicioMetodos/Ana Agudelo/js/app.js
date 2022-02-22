const verReceta = (Receta) => {
    console.log(Receta);
    switch (Receta) {
        case "receta1": //mostrar la primera receta
        console.log("prueba1");            
        break;

        case "receta2": //mostrar la primera receta
        console.log("prueba2");            
        break;

        case "receta3": //mostrar la primera receta
        console.log("prueba3");            
        break;
    
        default:
            break;
    }
}

/*
- El usuario Clickea alguno de los botones
- va a querer que le muestre la receta seleccionada
- al darle clic, el boton llama al metodo para que muestre los pasos de la receta que el usuario eligio 
- un metodo imprime la receta, pero distingue al mismo tiempo las tres ????????
- La receta aparece en una ventana emergente (puede ser flotando o pasa de pagina) con los ingredientes de un lado y el proceso de otro

** las personas para salir y volver a la pag principal pueden dar clic por fuera si la ventana emergente es flotante
** o dale clic al nombre prncipal de la web para volver a  la pagina de inicio
*/