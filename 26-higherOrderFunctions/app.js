const url = 'https://swapi.dev/api/people';
const loading = document.getElementById('loading');
const filterSelect =  document.getElementById('filter');
const display = document.getElementById('display')
let results = [];

let people;

async function run(){
    const response = await fetch(url);
    const responseObj = await response.json();
    people = responseObj.results;

    results = filterBy(filterSelect.value);
    display_data();

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

filterSelect.addEventListener("change", (e) => {
    results = filterBy(filterSelect.value);
    display_data();
});

run();