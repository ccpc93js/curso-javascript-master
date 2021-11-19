

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContex("2d");

// ctx.lineWidth = "6";
// ctx.strokeStyle ="#48c";
// ctx.fillStyle = "#26a";
// ctx.strokeRect(30,50,400,200);
// ctx.fillRect(10,20,400,200);
// ctx.lineTo(80,300);
// ctx.lineTo(120,350);
// ctx.lineTo(100,400);
// ctx.lineTo(120,450);
// ctx.stroke();
// ctx.closePath();
// ctx.beginPath();
// ctx.lineTo(80,300);
// ctx.lineTo(80,200);
// ctx.stroke();
// ctx.arc(120,120,100,10,40);
// ctx.stroke();



//ejercicio canvas

const canvas = document.getElementById('canvas');

const dif = canvas.getBoundingClientRect();

const ctx = canvas.getContext("2d");

let painting, color, linewwiidth,difX,difY

canvas.addEventListener("mousedown", e  =>{
    difX = e.clientX - dif.left;
    difY = e.clientY - dif.top;
    painting = true;
    color = document.getElementById("color").value ;
    linewwiidth = document.getElementById("lw").value; 
    ctx.beginPath();  
});

canvas.addEventListener("mouseup", ()=>{
    ctx.closePath();
    painting = false;
})

canvas.addEventListener("mousemove", e =>{
    if(painting){
        dibujar(difX, difY, e.clientX - dif.left, e.clientY - dif.top)
        difX = e.clientX - difX.left;
        difY = e.clientY - difY.top;
    }

})

const dibujar = (x1,y1,x2,y2)=>{
    ctx.strokeStyle = color;
    ctx.lineWidth = linewwiidth;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}