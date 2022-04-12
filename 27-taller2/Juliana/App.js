let List = document.querySelectorAll('.Nav li');

function ActiveLink() {
    List.forEach((e) =>
    e.classList.remove('hovered'));
    this.classList.add('hovered');
    }
    List.forEach((e) =>
    e.addEventListener('mouseover',ActiveLink))


let Toggle = document.querySelector('.Toggle');
let Nav = document.querySelector('.Nav');
let Main = document.querySelector('.Main');

Toggle.onclick = function() {
    Nav.classList.toggle ('Active');
    Main.classList.toggle ('Active');
}


var url = user.json;

async function Run(){
    let response = await fetch(url);
    let people = await response.json();

    console.log(people.results);

    people.results.forEach(e => {
        console.log({
            name: e.name,
            gender: e.gender,
            height: e.height,
            mass: e.mass
        })

        let Info = document.getElementById('Content');

        let DisplayInfo = document.createElement('p');
        DisplayInfo.innerHTML = e.name + "'s information is:" + `<br>` + "Gender: " + e.gender
        + `<br>` + "Height: " + e.height + `<br>` + "Mass: " + e.mass;
        Info.appendChild(DisplayInfo);

    });
}

Run();