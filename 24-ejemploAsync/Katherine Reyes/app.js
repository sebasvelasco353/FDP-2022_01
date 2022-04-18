var url = 'https://swapi.dev/api/people';

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