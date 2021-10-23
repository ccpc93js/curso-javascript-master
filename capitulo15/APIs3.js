//Drag & Drop

// const circulo = document.querySelector(".circulo");
// const rectangulo = document.querySelector(".rectangulo");

// circulo.addEventListener("dragenter", ()=>console.log(1));
// circulo.addEventListener("dragenter", (e) => {
//     e.dataTransfer.setData("clase", e.target.className);
// });

// circulo.addEventListener("drag", ()=>console.log(2));
// circulo.addEventListener("dragend", ()=>alert("soltado"));

// rectangulo.addEventListener("dragenter", () => console.log(1));
// rectangulo.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     console.log(2)
// })
// rectangulo.addEventListener("drop", ()=>{console.log(3)})
// rectangulo.addEventListener("drop", (e) => {
//     console.log(e.dataTransfer.getData("clase"))

// });

// rectangulo.addEventListener("dragleave", () => console.log(4))


//ejercicio drag & drop

const zona = document.querySelector(".zona");

zona.addEventListener("dragover", (e) => {
    e.preventDefault();
})
zona.addEventListener("drop", (e) => {
    let n = e.dataTransfer.getData("textura");
    zona.style.background = `url("textura${n}.png")`;
})

for (let i = 1; i < document.querySelector(".texturas").children.length + 1; i++) {
    document.querySelector(`.textura${i}`).addEventListener("dragstart", (e) => transferirTextura(i, e))
}

const transferirTextura = (n, e) => {
    e.dataTransfer.setData("textura", n);
}