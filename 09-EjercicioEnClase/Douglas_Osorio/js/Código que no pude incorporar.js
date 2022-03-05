/* uno para imprimir sin tanta cosa del if*/const renderUltimosDatos = () => {
    const LISTA_MEDIDAS_ELEMENT = document.getElementById("listaMedidas");
    LISTA_MEDIDAS_ELEMENT.innerHTML = '';
    var tag = document.createElement("p");

            tag.innerHTML =`Nombre(s): ${tempObj.nombre} - Edad: ${tempObj.edad} - Apellidos: ${tempObj.apellido} -
             Mide: ${tempObj.estatura} cm - ${tempObj.fuma} fuma - Oriundo de: ${tempObj.nacionalidad} -
             Tipo de sangre: ${tempObj.gruposang} - Operaciones anteriores: ${tempObj.operaciones} - 
             Exámen de triglicéridos y colesterol: ${tempObj.examenestri} - Exámen de azucar: ${tempObj.examenesazu}.`;
           
