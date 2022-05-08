var url = "https://raw.githubusercontent.com/sebasvelasco353/FDP-2022_01/main/33-taller3/weather.js";


async function Run(){
    let Response = await fetch(url);
    let ResJson = await Response.json();

    console.log(ResJson);

    let Cities = ResJson.ciudades;
    console.log(Cities);

    const Days = [];

    let HandleFilterC = document.getElementById('FilterC');
    let ResultsC = FilterByC(HandleFilterC.value);
    let HandleFilterD = document.getElementById('FilterD');
    let ResultsD = FilterByD(HandleFilterD.value);

    DisplayWeather();

    class Daily{
    constructor(day, celcius, precipitation, uvIndex, sunny, city){
        this.day = day;
        this.celcius =celcius;
        this.precipitation = precipitation;
        this.uvIndex = uvIndex;
        this.sunny = sunny;
        this.city = city;
        }
    /*Draw(Element) {
        const Opt = document.createElement('div');

        if (this.sunny) {
            Info.className = "Element sunny";
        } else {
            Info.className = "Element rainy"
        }

        Opt.innerHTML = `<p>${this.day} <br> (${this.celcius}) <br> (${this.precipitation}) <br> (${this.uvIndex}) <br> (${this.sunny ? "Sunny" : "Rainy"})</p>`;
        Element.appendChild(Opt);
        }*/
    }

    function ProcessInfo() {
        Cities.forEach(City=> {
            City.daily.forEach(dayObj => {
                Days.push(new Daily(dayObj.day, dayObj.celcius, dayObj.precipitation, dayObj.uvIndex, dayObj.sunny, City.city));
            });
            console.log(Days);
        });
    }
    ProcessInfo();
    DisplayWeather();

    
    function FilterByC(Criteria) {
        const Condition = {
        'Cali': Days.filter(p => p.city === "Cali"),
        'Bogotá': Days.filter(p => p.city === "Bogota")
        }
        return Condition[Criteria];
    }
    DisplayWeather();
    
    HandleFilterC.addEventListener("change", (e) => {
        ResultsC = FilterByC(HandleFilterC.value);
        console.log(ResultsC);
    })

    
    function FilterByD(Criteria) {
        const Condition = {
        'All': ResultsC,
        'Monday': ResultsC.filter(p => p.day === "monday"),
        'Tuesday': ResultsC.filter(p => p.day === "tuesday"),
        'Wednesday': ResultsC.filter(p => p.day === "wednesday"),
        'Thursday': ResultsC.filter(p => p.day === "thursday"),
        'Friday': ResultsC.filter(p => p.day === "fiday"),
        'Saturday': ResultsC.filter(p => p.day === "saturday"),
        'Sunday': ResultsC.filter(p => p.day === "sunday")
        }
    return Condition[Criteria];
    }
    
    HandleFilterD.addEventListener("change", (e) => {
        ResultsD = FilterByD(HandleFilterD.value);
        console.log(ResultsD);
        DisplayWeather();
    })

    
    function DisplayWeather() {
        const Info = document.getElementById('Daily');
        Info.innerHTML="";

        ResultsD.forEach(e => {
                
            let DisplayInfo = document.createElement('div');
            if (e.sunny) {
                DisplayInfo.className = "Element_sunny";
            } else {
                DisplayInfo.className = "Element_rainy"
            }
            DisplayInfo.innerHTML = `<p> <span class="HeaderText-Card">${e.day}, <br> ${e.city}</span> <br> <span class="Temp-Card">${e.celcius}°C </span> <br> <span class = "Status-Card">${e.sunny ? "Sunny" : "Rainy"}</span> <br> ${e.precipitation}% Precipitation <br> ${e.uvIndex} Uv</p>`;
            Info.appendChild(DisplayInfo);
        });
    }
 }

Run();