if(navigator.serviceWorker){
    navigator.serviceWorker.register("Sw.js");
}

navigator.serviceWorker.ready.then(res => res.active.postMessage("hola  como estas"));

navigator.serviceWorker.addEventListener("message",(e)=>{
    console.log("hemos recibido un mensaje del service worker");
    console.log(e.data)
}) 