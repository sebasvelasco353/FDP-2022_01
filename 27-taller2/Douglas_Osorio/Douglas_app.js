
const apiurl= "https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/27-taller2/user.json";

const filterSelect = document.getElementById("estado");
const filterSelect2 = document.querySelector("#edad")
const filterSelect3 = document.querySelector("#cirujia")
const resultsCont = document.getElementById("result");

let results=[];
let jsonRes;

logeo();
function logeo() {
    nombre = prompt ("Nombre de usuario")
    var nom = document.getElementById("hidoc");
    nom.innerText =`Hola Dr(a) ${nombre}`;
}
function logout(){
    var nom = document.getElementById("hidoc");
    nom.innerText =``;
}
async function run() {
    const res =  await fetch(apiurl);
    const respu = await res.json();
    results= respu.cases
    jsonRes= respu.cases
    console.log(results);

     results = filtrocas(filterSelect.value);
     set_datos();
     
}
/*if (filterSelect2.value === "mayor") {
        console.log(results);
        return results.filter(c =>c.closed.toString() === filterSelect.value && c.age > 50 && c.prev_surgery.toString() === filterSelect3.value);
    }else if (filterSelect3.value === "todo"){
        return results    
    }
     else {
        return results.filter(c =>c.closed.toString() == filterSelect.value && c.age > 50 && c.prev_surgery.toString() == filterSelect3.value);
    } 
    este bloque lo dejo por si lo hago funcionar luego, pero nada lo hace andar, todo da indefinido y por eso el array sale vacío:c*/
function filtrocas(criterio) {
    const filters = {
        'todo': results,
        'true': results.filter(c => c.closed === true),
        'false': results.filter(c => c.closed === false),
    }
    document.getElementById("edad").value = "todo";
    document.getElementById("cirujia").value = "todo";
    console.log(criterio);
    return filters[criterio];
}
function filtroed(criterio) {
    const filters = {
        'todo': results,
        'mayor': results.filter(c => c.age>50),
        'menor': results.filter(c => c.age<50)
    }
    document.getElementById("estado").value = "todo";
    document.getElementById("cirujia").value = "todo";
    console.log(criterio);
    return filters[criterio];
}
function filtrociru(criterio) {
    const filters = {
        'todo': results,
        'true': results.filter(c => c.prev_surgery === true),
        'false': results.filter(c => c.prev_surgery === false)
    }
    document.getElementById("edad").value = "todo";
    document.getElementById("estado").value = "todo";
    console.log(criterio);
    return filters[criterio];
}
filterSelect.addEventListener("change", (e) => {
    results=jsonRes;
    results = filtrocas(filterSelect.value);
    set_datos();
});
filterSelect2.addEventListener("change", (e) => {
    results=jsonRes;
    results = filtroed(filterSelect2.value);
    set_datos();
});
filterSelect3.addEventListener("change", (e) => {
    results=jsonRes;
    results = filtrociru(filterSelect3.value);
    set_datos();
});
function set_datos() {
    resultsCont.innerHTML = '';
    results.forEach(element => {
        var elm = document.createElement('p');
        elm.className = "display_element"
        elm.innerHTML = `<p>El estado del caso de ${element.name}, es ${element.closed ? "cerrado" : "abierto"}, tiene ${element.age} años y ${element.prev_surgery ? "sí tiene" : "no tiene"} cirujías previas.</p>`;
        resultsCont.appendChild(elm);
    });
}
run();
function msg() {
    prompt ("Explique brevemente qué necesita");
    alert (`Su solicitud fue enviada con éxito, espere unos segundos a que sea procesada, en caso de invalidéz, un agente se comunicará con usted Dr(a) ${nombre}`);   
}