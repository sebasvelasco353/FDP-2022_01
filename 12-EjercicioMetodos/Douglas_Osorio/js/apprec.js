const baseing = () => {
let base = document.getElementById("recetario");
base.innerText =`-Zanahoria.
            -Zapallo.
            -Papa.
            y recuerda tener sal y condimentos para agregar al gusto.`;
            baseproc();
}
const baseproc = () => {
    let pro = document.getElementById("recetario2");
    pro.innerText =`Para cocinar
            
            Empieza pelando la zanahoria, la papa y el zapallo.
            Luego pica la papa en cuadros, la zanahoria y el zapallo puedes picarlos o rayarlos, como prefieras.
            Agrega la papa a la olla y deja hervir unos cinco minutos`;
}
const guiso = () =>{
    let carne = document.getElementById("carne")
    carne.innerText =`Para complementar puedes preparar un guiso.
            empieza agregando recortes de carne o carne molida en una sartén con un poco de aceite pre-calentado, pica una cebolla y un tomate, agrégaselos a la carne, deja cocinar a fuego rápido unos treinta minutospuedes agregar salsa para carnes y a comer.`;
}
const cocina = () =>{
    var princ = document.getElementById("princ")
    if (princ = "fideos") {
        let ant = document.getElementById("default");
        ant.innerText = "Además de los fideos necesitarás:";
        baseing ();
        let fid = document.getElementById("unic");
        fid.innerText="Añade los fideos junto con la zanahoria y el zapallo, espera diez minutos. Está listo.";
        guiso();
    } else {if (princ = "avena") {
        let ant = document.getElementById("default");
        ant.innerText = "Además de la avena necesitarás:";
        baseing ();
        let fid = document.getElementById("unic");
        fid.innerText='Agrega la zanahoria y el zapallo, deja cocinar unos 5 minutos mientras tuestas la avena en una sartén a fuego rápido, añande la avena, espera entre veinticinco y treinta minutos. Está listo.';
        guiso();
            } else {
                baseing ();
    }     
    }
}
