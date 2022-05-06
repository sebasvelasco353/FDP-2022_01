const url = 'https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js';
const resultsCont = document.getElementById("container");
const filtrosemana = document.getElementById("dias");
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
    for (let i = 0; i < dias.length; i++) {
        CIUDADES.push(
            new ciudades(dias[i].city, dias[i].weeklyOverall, dias[i].daily)
        );
        console.log(CIUDADES);
        DIARIO.push(this.semana);
    }
    console.log(DIARIO);
    semanaCali.push(DIARIO[0])
    semanaBogota.push(DIARIO[1])
    // console.log(semanaBogota)
    // console.log(semanaCali)
    //set_cali();
    //set_bogota();
}
// function set_cali() {
//     resultsCont.innerHTML = '';
//     semanaCali.forEach(element => {
//         element.forEach(anotherel =>{
//         var elm = document.createElement('div');
//         elm.className = "display_day"
//         elm.innerHTML = `${anotherel.day} ${anotherel.celcius} ${anotherel.uvIndex} ${anotherel.sunny}`;
//         resultsCont.appendChild(elm);
//         })
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
run();