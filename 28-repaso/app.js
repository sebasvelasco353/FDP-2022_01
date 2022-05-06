const url = "https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/27-taller2/user.json";

const filterSelect = document.querySelector("#filtro");
const resultsContainer = document.querySelector("#resultsContainer");

let jsonRes;
let data;

async function run() {
    const res =  await fetch(url);
    jsonRes = await res.json();
    data = jsonRes.cases.filter(p => p.smoker === true);
    draw();
}

function handleFilter(e) {
    data = jsonRes.cases.filter(p => p.smoker === (e.target.value === 'true'));
    draw();
}

function draw() {
    resultsContainer.innerHTML = ""; // delete all elements inside the container

    data.forEach(element => { // create an element for every obj in the array
        console.log(`desde foreach: ${element.name}`);
        const opt = document.createElement('div');
        opt.innerHTML = `<b><p>${element.name}</p></b> height: ${element.height} smoker: ${element.smoker}`;
        resultsContainer.appendChild(opt); // add the element to the container
    });
}

run();

