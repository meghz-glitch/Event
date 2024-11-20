// // const showContent = event => console.log(event.target.textContent)

// // document.querySelector(".porcupine").onclick = showContent;

// // document.querySelector(".panther").onclick = (event) => console.log(event.target.targetName)

// // //window.onclick =event =>console.log (event.target)
// // document.querySelector(".penguine").onclick =(event)=> console.log(event.target.textContent.toUpperCase)

// // window.onclick = event =>console.log(event.target.textContent.toUpperCase())

// // //window.onclick =event =>console.log (event.target.textContent.toUpperCase())

// // const sayHi =(name) => alert("Hi" + name);
// // document.querySelector(".header").addEventListener("click",() => sayHi("Meg"));

// const pelicanLove = () => {
//     for (let i = 0; i < 3; i++) {
//         console.log("I love pelicans!")
//     }
// }
// document.querySelector(".pelican").addEventListener("click",pelicanLove)

// const birdLove =animal => console.log(`${animal} is a pretty boy`);

// document.querySelector(".parrot").addEventListener("click", event =>birdLove(event.target.textContent))
// document.querySelector(".peacock").addEventListener("click", event =>birdLove(event.target.textContent))

// const notAnteater = () => console.log("I am Not an anteater")
// const notArmdillo = () => console.log("I am Not an armadillo")

// document.querySelector(".pangolin").addEventListener ("click", notAnteater);
// document.querySelector(".pangolin").addEventListener ("click", notArmdillo,{once: true});

// // let x =document.querySelectorAll(".tab")
// // console.log(x)
// // let tabs = Array.from(x);
// // tabs.forEach(item => item.addEventListener("click", () => alert(item.textContent)))


// const bestAnimal = animal => 
    
//     // if (animal.toLowerCase()=== "panther") 
//     //     console.log(`${animal} is the jungle assassin`)
//     // }else{
//     //     console.log(`${animal} is the best!`);
//     // }

// let animalTabs = Array.from(document.querySelectorAll(".tab"));

// animalTabs.forEach(tab => tab.addEventListener("click", () => bestAnimal(tab.textContent)))

// document.querySelector("footer p span").addEventListener("click",() => console.log("Span"))
// document.querySelector("footer").addEventListener("click",() => console.log("Footer"),true)
// document.querySelector("footer p").addEventListener("click",() => console.log("paragraph"),true)

// const setActive = (clickedTab) => {
//     animalTabs.forEach(tab =>tab.classList.remove("active"));
//     clickedTab.classList.add("active")
//     document.querySelector(".header__page-title").textContent =clickedTab.textContent;
// }
// animalTabs.forEach(tab => tab.addEventListener("click",() =>setActive(tab)))
// let animalContent = Array.from(document.querySelectorAll(".content"));

// const findContent = classToMatch => {
//     animalContent.forEach(contentDiv =>)
// }
document.querySelector(".pan")

const showContent = event => console.log(event.target.textContent)

document.querySelector(".porcupine").onclick = showContent;

document.querySelector(".panther").onclick = (event) => console.log(event.target.tagName)

//window.onclick = event => console.log(event.target)

document.querySelector(".penguin").onclick = (event) => console.log(event.target.textContent.toUpperCase())

//window.onclick = event => console.log(event.target.textContent.toUpperCase())

const pelicanLove = () => {
    for (let i = 0; i < 3; i++) {
        console.log("I love Pelicans!")
    }
}

document.querySelector(".pelican").addEventListener("click", pelicanLove)

const birdLove = animal => console.log(`${animal} is a pretty boy`);

document.querySelector(".parrot").addEventListener("click", event => birdLove(event.target.textContent))
document.querySelector(".peacock").addEventListener("click", event => birdLove(event.target.textContent))

const notAnteater = () => console.log("I am NOT an anteater")
const notArmadillo = () => console.log("I am NOT an armadillo")

document.querySelector(".pangolin").addEventListener("click", notAnteater);
document.querySelector(".pangolin").addEventListener("click", notArmadillo, { once: true });

// let x = document.querySelectorAll(".tab")
// console.log(x)
// let tabs = Array.from(x);

// tabs.forEach(item => item.addEventListener("click", () => alert(item.textContent)))

const bestAnimal = animal =>
    console.log((animal.toLowerCase() === "panther") ? `${animal} is the jungle assassin` : `${animal} is the best!`)


//     if (animal.toLowerCase() === "panther") {
//         console.log(`${animal} is the jungle assassin`)
//     } else {
//         console.log(`${animal} is the best!`);
//     }
// }'

let animalTabs = Array.from(document.querySelectorAll(".tab"));

// animalTabs.forEach(tab => tab.addEventListener("click", () => bestAnimal(tab.textContent)))

// // document.querySelector("footer p span").addEventListener("click", () => console.log("Span"))

// document.querySelector("footer").addEventListener("click", () => console.log("Footer"), true)

// document.querySelector("footer p").addEventListener("click", () => console.log("Paragraph"), true)

// const setActive = (clickedTab) => {
//     animalTabs.forEach(tab => tab.classList.remove("active"));
//     clickedTab.classList.add("active")
//     document.querySelector(".header__page-title").textContent = clickedTab.textContent;
// }

animalTabs.forEach(tab => tab.addEventListener("click", () => setActive(tab)))

let animalContent = Array.from(document.querySelectorAll(".content"));

const findContent = classToMatch => {
    animalContent.forEach(contentDiv => {
        if (contentDiv.classList.contains(classToMatch)) {
            contentDiv.classList.add("featured")
        }
    })
}

animalTabs.forEach(tab => tab.addEventListener("mouseenter", () => {
    findContent(tab.textContent.toLowerCase())
}));

animalTabs.forEach(tab => tab.addEventListener("mouseleave", () =>
     animalContent.forEach(contentDiv => contentDiv.classList.remove("featured"))
))


let searchInput = document.querySelector("#search");
searchInput.addEventListener("change",() => console.log(searchInput.value))

const findTab = () => {
    animalTabs.forEach(tab => {
        if(tab.textContent.toLowerCase().contains(searchInput.value)) {
            tab.classList.add('active')
        } else {
            tab.classList.remove('active')
        }
    } )
 
}

searchInput.addEventListener("input", findTab)

let countries = ["Australia","Sweden","Pakisthan"]

countries.push("India")

console.log(countries)

let Australia = {
    name: "Australia",
    capitalCity: "Canberra",
    language: "English",
    population: 250000000,
    sports: ["Cricket","Aussie Rules","Tennis"]
}

console.log(`There are ${Australia.population} people living in ${Australia.name}`);

// document.querySelector("h1").textContent = Australia.sports[0]

function Country(name , capitalCity,language,population,sports) {
    this.name = name;
    this.capitalCity = capitalCity;
    this.language = language;
    this.population = population;
    this.sports = sports;
    this.description = () => console.log(`${this.name}`
}

let sweden = new Country("Sweden","Stockholm","Svenska",11000000,["Hockey","Brandboll","Bandy"]);
 let pakisthan = new Country("Pakistan","Islambad","Urdu",2400000,["Cricket,Hockey"]);
 let australia = new Country("Aussie","Canberra","Stayan",1200000,["Cricket,Football"]);

console.log(sweden.capitalCity)
console.log(pakisthan.language)

