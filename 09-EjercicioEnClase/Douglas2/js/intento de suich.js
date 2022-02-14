switch (edad) {
    case edad>49:
        if (confirm("¿Se ha realizado exámenes de triglicéridos y colesterol en los últimos 6 meses?")) {
            let examenestri="Sí"
            let examenesazu="N/A"
            const registroObj = {
                edad,
                nombre,
                fuma,
                apellido,
                estatura,
                nacionalidad,
                gruposang,
                operaciones,
                examenestri,
                examenesazu
            }
            registroTemperaturas.push(registroObj);
        
        } else {
            let examenestri="No"
            let examenesazu="N/A"
            const registroObj = {
    edad,
    nombre,
    fuma,
    apellido,
    estatura,
    nacionalidad,
    gruposang,
    operaciones,
    examenestri,
    examenesazu
}
registroTemperaturas.push(registroObj);

        }
        break;
        case edad<50:
        if (confirm("¿Se ha realizado exámenes de azúcar en los últimos 3 meses?")) {
            let examenestri="N/A"
            let examenesazu="Sí"
            const registroObj = {
    edad,
    nombre,
    fuma,
    apellido,
    estatura,
    nacionalidad,
    gruposang,
    operaciones,
    examenestri,
    examenesazu
}
registroTemperaturas.push(registroObj);

        } else {
            let examenestri="N/A"
            let examenesazu="No"
            const registroObj = {
    edad,
    nombre,
    fuma,
    apellido,
    estatura,
    nacionalidad,
    gruposang,
    operaciones,
    examenestri,
    examenesazu
}
registroTemperaturas.push(registroObj);

        }
        break;
    default:
        text ="No ha ingresado la edad";
        break;
}