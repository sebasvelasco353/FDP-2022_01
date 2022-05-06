const url = 'https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js';
const resultsCont = document.getElementById("container");
const filtrosemana = document.getElementById("dias");
const filtrocity = document.getElementById("maincitys")
let dias;
let CIUDADES=[];
let DIARIO=[];
let semanaCali=[];
let semanaBogota=[];

class ciudades{
    constructor(ciudad, semgen, semana){
    this.ciudad= ciudad;
    this.semgen= semgen;
    this.semana= semana;
    }
}
async function run(){
    const response = await fetch(url);
    const responseObj = await response.json();
    dias = responseObj.ciudades;
    sacardaily(dias);
    for (let i = 0; i < dias.length; i++) {
        CIUDADES.push(
            new ciudades(dias[i].city, dias[i].weeklyOverall, dias[i].daily)
        );
    }
    semanaCali.push(DIARIO.slice(2,37))
    semanaBogota.push(DIARIO.slice(39)) 
    console.log(semanaCali);
    console.log(semanaBogota);
    set();
}
function set (){
    if (filtrocity.value === "cali") {
        set_cali();
    }else if (filtrocity.value === "bogota"){
        set_bogota();
    }
}
filtrocity.addEventListener("change", (e) =>{
set();
});
function set_cali() {
    resultsCont.innerHTML = '';
    for (let i = 0; i < semanaCali.length; i++) {
        var elm = document.createElement('div');
        elm.className = "display_day"
        elm.innerHTML = `${semanaCali[i]}`;
        resultsCont.appendChild(elm);
    }    
}
function set_bogota() {
    resultsCont.innerHTML = '';
    for (let i = 0; i < semanaBogota.length; i++) {
        var elm = document.createElement('div');
        elm.className = "display_day"
        elm.innerHTML = `${semanaBogota[i]}`;
        resultsCont.appendChild(elm);
    }}    
// semanaCali.forEach(element => {
    //     var elm = document.createElement('div');
    //     elm.className = "display_day"
    //     elm.innerHTML = `${element[0]}`;
    //     resultsCont.appendChild(elm);
//     });
// }
// function set_bogota() {
//     resultsCont.innerHTML = '';
//     semanaBogota.forEach(element => {
//         element.forEach(anotherel =>{
//         var elm = document.createElement('div');
//         elm.className = "display_day"
//         elm.innerHTML = `${anotherel.day} ${anotherel.celcius} ${anotherel.uvIndex} ${anotherel.sunny}`;
//         resultsCont.appendChild(elm);
//         })
//     });
// }
function sacardaily(data) {
    for (var key in data) {
      if (typeof(data[key]) == "object" && data[key] != null) {
        sacardaily(data[key]);
      } else {
        DIARIO.push( key + " = " + data[key]);
      }
    }
} 
function colordeldia (){

}
run();