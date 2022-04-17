const url = 'https://raw.githubusercontent.com/Santygr21/FDP-2022_01/main/27-taller2/user.json'; 
console.log(url);
var menu_side = document.getElementById("menu_side");
var icon_menu = document.getElementById("icon_menu");
var body = document.getElementById("body");

const filterSelect = document.getElementById("filter")


let data;
let message;
let jsonRes;


async function run(){
    const res = await fetch(url);
    jsonRes = await res.json();
    data = jsonRes.cases;
    message = jsonRes.messages;

    results = filterBy(filterSelect.value);
    console.log(results);
    draw_data();
}

function filterBy(criteria){
    const filters = {
        'all' : data,
        'age<50' : data.filter(p => p.age < 50),
        'age>50' : data.filter(p => p.age > 50),
        'closed' : data.filter(p => p.closed === true),
        'open' : data.filter(p => p.closed === false),
        'previous Surgery' : data.filter(p => p.prev_surgery === true),
    }
    return filters[criteria];
}

filterSelect.addEventListener("change", (e) => {
    results = filterBy(filterSelect.value);
    console.log(results);
    draw_data();
})

function draw_data() {
    display.innerHTML = '';
    results.forEach(element => {
        var opt = document.createElement('div');
        opt.className = "display_element"
        opt.innerHTML = `<p><b>${element.last_name}, ${element.name}</b></p> <p>Age: ${element.age}<br>Height: ${element.height}<br>Smoker: ${element.smoker}<br>Country: ${element.country}<br>Bloodtype: ${element.bloodtype}<br>Closed case: ${element.closed}<br>Previous surgeries: ${element.prev_surgery}</p>`;
        display.appendChild(opt);
    });

}


function movement_menu(){
    body.classList.toggle("menu__animation");
    menu_side.classList.toggle("menu_side_animation");
}

run();

