const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';

const select = document.querySelector('.breeds');

fetch(BREEDS_URL)
  .then(res => {
    return res.json();
  })
  .then(data => {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);
    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement('option');
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
    console.log(breedsArray);
  });

select.addEventListener('change', event => {
  let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
  getDoggo(url);
});

const img = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner');

const getDoggo = url => {
  spinner.classList.add('show');
  img.classList.remove('show');
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      img.src = data.message;
    });
};

img.addEventListener('load', () => {
  spinner.classList.remove('show');
  img.classList.add('show');
});

class Greeting {
    constructor(authors) {
        this.authors = authors;
        let subject = "Programming Fundamentals (2022)"

        this.subject = function(){
            return subject;
        }
        this.intro = function(){
            console.log("Hello, we are" +authors+ "and this is our adoption website project for" + this.subject());
        }
    }
}

let objGreeting = new Greeting(" Juana and Sophie ");

objGreeting.intro();