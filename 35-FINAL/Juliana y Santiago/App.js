/* Tiitle with Animation*/
DisplayText(['Global Warming.', 'We can resolve it!'], 'text',['white']);

function DisplayText(words, id, colors) {
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 100)
  
}


/*API, class and objects*/
const Url = "";

let Country = [];
let TheData;

window.onload = function () {
    fetch(Url)
        .then(response => response.json())
        .then(data => {
            ProcessInfo(data)
            TheData = data;
        });
}

function ProcessInfo(Data) {
  Data.Countries.forEach(CountryObj => {
    Country.push(new Countries(CountryObj.Country, CountryObj.Co2, CountryObj.Status));
  });
  console.log(Country);
}

class Countries {
    constructor(Country, Co2, Status) {
        this.Country = Country;
        this.Co2 = Co2;
        this.Status = Status;
    }
}

function DisplayData() {
  const CountryInfo = document.getElementById("CountryInfo");
  CountryInfo.innerHTML = "";

  const Info = document.createElement('div');
  if (this.Status === "Dangerous") {
      Info.innerHTML = `<p>In ${this.Country} there is an annual emission of ${this.Co2} of CO2! <br> Status: ${this.Status} AQUÍ VA EL ICONO</p>`;
      CountryInfo.appendChild(Info);
  } else if (this.Status === "Warning") {
    Info.innerHTML = `<p>In ${this.Country} there is an annual emission of ${this.Co2} of CO2! <br> Status: ${this.Status} AQUÍ VA EL ICONO</p>`;
    CountryInfo.appendChild(Info);
  } else {
    Info.innerHTML = `<p>In ${this.Country} there is an annual emission of ${this.Co2} of CO2! <br> Status: ${this.Status} AQUÍ VA EL ICONO</p>`;
    CountryInfo.appendChild(Info);
  }
}