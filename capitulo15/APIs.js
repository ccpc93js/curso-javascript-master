"use stric"
// APIs (interface programacion de aplicacion) dentro del lenguaje

///objeto date

const fecha = new Date();

console.log(fecha.getDate()) // devuelve dia de la mes

console.log(fecha.getDay()) // devuelve dia de la semana, por medio de indices empesando desde 0 siendo domingo

console.log(fecha.getMonth()) // devuelve el mes, empezando desde el indice 0

console.log(fecha.getYear() + 1900) // devuelve el año, ejemplo : 2020 - 1900 = 120  si suman 1900 les da 2020

console.log(fecha.getHours()) //devuelve la hora

console.log(fecha.getMinutes()) //devuelve los minutos

console.log(fecha.getSeconds()) // devuelve los segundos


// Ejemplo alarma js

const addZeros = n => {
    if (n.toString().length < 2) return "0".concat(n);
    return n
}

const actualizarHora = () => {
    const time = new Date();
    let hora = addZeros(time.getHours());
    let min = addZeros(time.getMinutes());
    let seg = addZeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = min;
    document.querySelector(".seg").textContent = seg;
}


actualizarHora();
setInterval(actualizarHora, 1000)


///localstorage y sessionstorage


//local
localStorage.setItem("nombre", "pedro");

console.log(localStorage)

let nombre = localStorage.getItem("nombre")


setTimeout(() => {
    let nombre = localStorage.clear("nombre")
}, 2000)

console.log(nombre)

//session

sessionStorage.setItem("nombre", "pedro");

console.log(sessionStorage)

let nombre = sessionStorage.getItem("nombre")

setTimeout(() => {
    let nombre = sessionStorage.removeItem("nombre")
}, 2000)


setTimeout(() => {
    let nombre = sessionStorage.clear("nombre")
}, 2000)

console.log(nombre)




const modal = document.querySelector("modal-overlay");


const definirIdioma = () => {
    document.querySelector(".en").addEventListener("click", () => {
        localStorage.setItem("idioma", "en");
        cerrarModal()
    })
    document.querySelector(".es").addEventListener("click", () => {
        localStorage.setItem("idioma", "es");
        cerrarModal()
    })
}



const cerrarMOdal = () => {
    modal.getElementsByClassName.animation = "desaparecer 1s forwards";
    setTimeout(() => modal.getElementsByClassName.display = "none,1000");
}


const idioma = localStorage.getItem("idioma")
if (idioma === null) definirIdioma();
else {
    console.log(`Idioma: ${idioma}`)
    modal.display = "none"
}

