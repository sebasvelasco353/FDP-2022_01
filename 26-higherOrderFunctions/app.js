const url = 'https://swapi.dev/api/people';
const loading = document.getElementById('loading');
const filterSelect =  document.getElementById('filter');
const reducerSelect =  document.getElementById('reducer');
const reducer_result = document.getElementById('reducer_result');
const display = document.getElementById('display')
let results = [];

let people;

async function run(){
    const response = await fetch(url);
    const responseObj = await response.json();
    people = responseObj.results;

    results = filterBy(filterSelect.value);
    display_data();
    display_reducer();

    loading.style.display = 'none';
}

function display_data() {
    display.innerHTML = '';
    results.forEach(element => {
        var opt = document.createElement('p');
        opt.className = "display_element"
        opt.innerHTML = `<p>${element.name}</p> mass: ${element.mass} height: ${element.height}`;
        display.appendChild(opt);
    });
}

function display_reducer() {
    reducer_result.innerText = `El resultado del reducer es ${reduce(reducerSelect.value)}`
}

function filterBy(criteria) {
    const filters = {
        'all': people,
        'height>150': people.filter(p => parseInt(p.height) > 150),
        'height<150': people.filter(p => parseInt(p.height) < 150),
        'mass<100': people.filter(p => parseInt(p.mass) < 100),
        'mass>100': people.filter(p => parseInt(p.mass) > 100),
    }
    return filters[criteria];
}

function reduce(criteria) {
    console.log(results);
    const reducers = {
        'heightSum': results.reduce((a, b) => parseInt(a.height) + parseInt(b.height)),
        'massSum': results.reduce((a, b) => parseInt(a.mass) + parseInt(b.mass))
    }
    return reducers[criteria];
}

filterSelect.addEventListener("change", (e) => {
    results = filterBy(filterSelect.value);
    display_data();
    display_reducer();
});

reducerSelect.addEventListener("change", (e) => {
    display_reducer();
});

run();