//Navigation
const Sections = document.querySelectorAll(".Navigation");

Sections.forEach((elm)=>{
    elm.addEventListener('click', ()=>
    {
        let element = document.getElementById(elm.getAttribute("data-link"));
        element.scrollIntoView({behavior:"smooth", block:"start"});
    })
})

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
const Countries = [];
let TheData;

window.onload = function () {
    fetch(`./Data.json`)
        .then(response => response.json())
        .then(data => {
            ProcessInfo(data)
            TheData = data;
        });
}

function ProcessInfo(Data) {
  Data.Countries.forEach(CountryObj => {
    Countries.push(new Country(CountryObj.Country, CountryObj.Co2, CountryObj.Status));
  });
  console.log(Countries);
  Countries.forEach(element => {
    console.log(element);
    element.DisplayData();
  });
}


class Country {
    constructor(Country, Co2, Status) {
        this.Country = Country;
        this.Co2 = Co2;
        this.Status = Status;
    }
    DisplayData() {
      console.log(this);
      const CountryInfo = document.getElementById("CountryInfo");
    
      const Info = document.createElement('div');
      if (this.Status === "Dangerous") {
          Info.innerHTML = `<p>In <b>${this.Country}</b> there is an annual emission of ${this.Co2} of CO2! <br></p> <h3><b>Status:</b> ${this.Status}</h3><br>`;
          CountryInfo.appendChild(Info);
      } else if (this.Status === "Warning") {
        Info.innerHTML = `<p>In <b>${this.Country}</b> there is an annual emission of ${this.Co2} of CO2! <br> <h3><b>Status:</b> ${this.Status} </h3><br>`;
        CountryInfo.appendChild(Info);
      } else {
        Info.innerHTML = `<p>In <b>${this.Country}</b> there is an annual emission of ${this.Co2} of CO2! <br> <h3><b>Status:</b> ${this.Status} </h3><br>`;
        CountryInfo.appendChild(Info);
      }
    }
}

/* countries statistic  */

/*Alerts*/
function Err() {
  Swal.fire(
      'Ups!',
      'looks like this function is temporarily unavailable.',
      'warning'
    )
}


function Send(){
  if (document.getElementById("Name").value===''|| document.getElementById("Phone").value==='' || document.getElementById("Message").value===''){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. You have to fill in all the required fields',
      })
  }else{
      Swal.fire({
          title: "Great",
          text: "Now you are one step closer to making a change.",
          icon: "success",
          button: "Thanks!",
          });
  }}

gsap.from('.Banner', { duration: 1, x: '-100%', ease: 'power2.inOut'})
