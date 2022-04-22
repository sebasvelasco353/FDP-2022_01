const url = 'https://raw.githubusercontent.com/sophienunez/FDP-2022_01/main/27-taller2/user.json';

const filterSelect = document.getElementById('filter');
const displayp = document.querySelector('#returnData');
const displaym = document.querySelector('#returnMessage');

let jsonRes;
let data;
let mensajes;

//async function
async function run() {
    const res = await fetch(url);
    jsonRes = await res.json();
    data = jsonRes.cases;
    mensajes = jsonRes.messages;
    results = filterBy(filterSelect.value);
    draw();
}

//filter
function filterBy(criteria) {
    const filters = {
        'all': data,
        'closed': data.filter(p => p.closed === true),
        'open': data.filter(p => p.closed === false),
        'age<50': data.filter(p => p.age < 50),
        'age>50': data.filter(p => p.age > 50),
        'prev_surgery': data.filter(p => p.prev_surgery === true),
    }
    return filters[criteria];
}

filterSelect.addEventListener("change", (e) => {
    results = filterBy(filterSelect.value);
    console.log(results);
    draw();
})

//display
function draw() {
    displayp.innerHTML = "";
    results.forEach(element => {
        const opt = document.createElement('tr');
        opt.className = "display_element";
        opt.innerHTML = `<td><b>${element.name} ${element.last_name}</b></td> <td>${element.age}</td> <td>${element.height}</td> <td>${element.smoker}</td> <td>${element.country}</td> <td>${element.bloodtype}</td> <td>${element.prev_surgery}</td> <td><span class="status">${element.closed}</span></td>`;
        displayp.appendChild(opt);
    });

    displaym.innerHTML = "";
    mensajes.forEach(element => {
        const opt = document.createElement('div');
        opt.className = "display_element";
        opt.innerHTML = `<p><b>${element.sender}</b> <font size="2">(${element.timestamp})<br> ${element.cc}</font></p><p>${element.message}`;
        displaym.appendChild(opt);
    });

    {
        document.getElementById('recieved').innerHTML = "";
        const opt = document.createElement('div');
        opt.innerHTML = `Recieved (${mensajes.length})`;
        document.getElementById('recieved').appendChild(opt);
    }
}

function error(){
    swal("Sorry, this function is not available right now", "error");
};
function send(){
    if (Name.value===''|| Email.value==='' || message.value===''){
        swal("", "Please, fill in all the fields","warning");
    }else{
        swal("", "Your message has been send :)", "success",);
    }}
run();