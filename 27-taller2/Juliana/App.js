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


var url = "https://raw.githubusercontent.com/Juli0931/FDP-2022_01/main/27-taller2/user.json";

async function Run(){
    let Response = await fetch(url);
    let ResJson = await Response.json();

    console.log(ResJson);

    let Messages = ResJson.messages;
    console.log(Messages);
    let Cases = ResJson.cases;
    console.log(Cases);
    let HandleFilter = document.getElementById('Filter');
    let Results = FilterBy(HandleFilter.value);
    Draw();


        function FilterBy(Criteria) {
            const Condition = {
            'All': Cases,
            'Open': Cases.filter(p => p.closed === false),
            'Closed': Cases.filter(p => p.closed === true),
            'Age<50': Cases.filter(p => parseInt(p.age) < 50),
            'Age>50': Cases.filter(p => parseInt(p.age) > 50),
            'PreSurgery': Cases.filter(p => p.prev_surgery === true),
            }
            return Condition[Criteria];
        }
        
        HandleFilter.addEventListener("change", (e) => {
            Results = FilterBy(HandleFilter.value);
            console.log(Results);
            Draw();
        })

        function Draw() {
            function DisplayUser() {
                    const Info = document.getElementById('Welcome');
                    Info.innerHTML="";
                        
                    let DisplayInfo = document.createElement('p');
                    DisplayInfo.innerHTML = "Hey, " + ResJson.name + "." + `<br>` + "Have a nice day!";
                    Info.appendChild(DisplayInfo);
            }
            DisplayUser();


            function DisplayMessages() {
                const Info = document.getElementById('Messages');
                Info.innerHTML="";

                Messages.forEach(e => {
                        
                    let DisplayInfo = document.createElement('p');
                    DisplayInfo.innerHTML = `<div> <p>${e.sender} <br> (${e.timestamp})</p><p>${e.message}</p></div>`;
                    Info.appendChild(DisplayInfo);
                });
            }
            DisplayMessages ();


            function DisplayCases() {
                const Info = document.getElementById('Cases');
                Info.innerHTML="";

                Results.forEach(e => {
                        
                    let DisplayInfo = document.createElement('p');
                    DisplayInfo.innerHTML = `<p><p>${e.name} ${e.last_name}</p><p>${e.age}</p><p>${e.bloodtype}</p><p>${e.country}</p></p>`;
                    Info.appendChild(DisplayInfo);
                });
            }
            DisplayCases();
        }

        async function NewMessage(){
            const { value: formValues } = await Swal.fire({
                title: 'New message',
                html:
                  '<label for: Email><input id="swal-input1" class="swal2-input" placeholder="Send to:"></label>' +
                  '<label for: Message><input id="swal-input2" class="swal2-input" placeholder="Message:"></label>',
                showConfirmButton: true,
                showCancelButton: true,
                focusConfirm: false,
                preConfirm: () => {
                  return [
                    'The message was send correctly'
                  ]
                }
              })
              
              if (formValues) {
                Swal.fire(JSON.stringify(formValues))
              }
        }
        NewMessage();
}


Run();