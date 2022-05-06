const url = 'https://raw.githubusercontent.com/Agudelo02093/FDP-2022_01/main/33-taller3/weather.js';

const filterCity = document.getElementById("block");
const filterWeek = document.getElementById("days");

let allCitys=[];
let days;

class citys{
    constructor(city, wOverall, daily){
    this.city = city;
    this.wOverall = wOverall;
    this.daily = daily;
    }
}
async function run(){
    const response = await fetch(url);
    const responseObj = await response.json();
    days = responseObj.ciudades;
    for (let i = 0; i < days.length; i++) {
        allCitys.push(
            new citys(days[i].city, days[i].weeklyOverall, days[i].daily)
        );
        console.log(allCitys);
    }
}

function filterBy(criteria) {
    const filter = {
        'Cali': allCitys.filter(p => p.city === "Cali"),
        'Bogota': allCitys.filter(p => p.city === "Bogota"),
    }
    return filter[criteria];
}

filter_City.addEventListener("change", (e) => {
    results = filterBy(filter_City.value);
    console.log(results);
    //draw();
})

/*function draw() {
    
}*/

function filterdayBy(criteria) {
    const filter_Cali = {
        'all': Cali,
        'mon': Cali.filter(p => p.day === "monday"),
        'tue': Cali.filter(p => p.day === "tuesday"),
        'wed': Cali.filter(p => p.day === "wednesday"),
        'thu': Cali.filter(p => p.day === "thursday"),
        'fri': Cali.filter(p => p.day === "fiday"),
        'sat': Cali.filter(p => p.day === "saturday"),
        'sun': Cali.filter(p => p.day === "sunday"),
    }
    const filter_Bogota = {
        'all': Bogota,
        'mon': Bogota.filter(p => p.day === "monday"),
        'tue': Bogota.filter(p => p.day === "tuesday"),
        'wed': Bogota.filter(p => p.day === "wednesday"),
        'thu': Bogota.filter(p => p.day === "thursday"),
        'fri': Bogota.filter(p => p.day === "fiday"),
        'sat': Bogota.filter(p => p.day === "saturday"),
        'sun': Bogota.filter(p => p.day === "sunday"),
    }
    if (filter_City.value === 'Cali'){
        return filter_Cali[criteria];
    }else{
        return filter_Bogota[criteria];
    }
}

run();