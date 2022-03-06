var ant="";
var fid="";
var antibug=0;

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
    
            empieza agregando recortes de carne o carne molida en una sartén con un poco de aceite pre-calentado, pica una cebolla y un tomate, agrégaselos a la carne, deja cocinar a fuego rápido unos treinta minutos, puedes agregar salsa para carnes y a comer.`;
}
const cocina = () =>{
    var princ = document.getElementById("princ").value;
    if (princ === "fideos") {
        ant = document.getElementById("default");
        ant.innerText = "Además de los fideos necesitarás:";
        baseing ();
        fid = document.getElementById("unic");
        fid.innerText="Añade los fideos junto con la zanahoria y el zapallo, espera de seis a nueve minutos. Está listo.";
        guiso();
        antibug=1;
    } else if (princ === "avena") {
        ant = document.getElementById("default");
        ant.innerText = "Además de la avena necesitarás:";
        baseing ();
        fid = document.getElementById("unic");
        fid.innerText='Agrega la zanahoria y el zapallo, deja cocinar unos dos minutos mientras tuestas la avena en una sartén a fuego rápido, una vez tostada añande la avena, espera entre diez y veinte minutos. Está listo.';
        guiso();
        antibug=2
    } else {
        ant = document.getElementById("default");
        ant.innerText = "Además del cuchuco de maíz necesitarás:";
        baseing ();
        fid = document.getElementById("unic");
        fid.innerText='Añade la zanahoria, el zapallo y el cuchuco de maíz, deja hervir unos diez minutos. Está listo.';
        guiso();
        antibug=3;
    }     
}   
const precant = () =>{
    var porcion= document.getElementById("porcion").value;
let ingcanti = document.getElementById("ingcant");
    var zana = 1 * porcion;
    var zapa= 200 * porcion;
    var papa= 1 * porcion;
    ingcanti.innerText =`la cantidad aproximada de ingredientes necesariospara cocinar ${porcion} porcion(es) son:
    - Zanahoria(s): ${zana}
    - Zapallo: ${zapa}g
    - Papa(s): ${papa}
    - Condimentos al gusto`;
}
const showcant = () =>{
    var porcion2 = document.getElementById("porcion").value;
    if(porcion2<1){
        var cero = document.getElementById("ingcant2")
        cero.innerText =`Hacete nomás, cómo querés descocinar???.`
    } 
    else if (antibug===1) {
        precant();
        var uno = document.getElementById("ingcant2")
        uno.innerText =`Y ${porcion2*70}g de fideos.`
    } else if(antibug===2) {
        precant();
        var dos = document.getElementById("ingcant2")
        dos.innerText =`Y ${porcion2*60}g de avena.`
    }
    else if (antibug===3){
        precant();
        var tres = document.getElementById("ingcant2")
        tres.innerText =`Y ${porcion2*80}g de cuchuco de maíz.`
    }
}
