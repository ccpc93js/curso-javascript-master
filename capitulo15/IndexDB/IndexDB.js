"use strict"
// const IDBRequest = indexedDB.open("ccpcDB",1); // window.indexedDB

// IDBRequest.addEventListener("upgradeneeded", ()=>{
//     const db = IDBRequest.result;
//     db.createObjectStore("nombres",{
//         autoIncrement: true
//     })
// })

// IDBRequest.addEventListener("success", ()=>{
//     console.log("todo salio correcto")
// })

// IDBRequest.addEventListener("error",()=>{
//     console.log("ocurrio un error al abrir la base de datos")
// })


// const getIDBData = (mode,msg) => {
//     const db = IDBRequest.result;
//     const IDBtransaction = db.transaction("nombres",mode);
//     const objectStore = IDBtransaction.objectStore("nombres");
//     IDBtransaction.addEventListener("complete", ()=>{
//         console.log(msg);
//     });
//     return objectStore;
// }

// const addObject = (objeto) =>{
//     const IDBData = getIDBData("readwrite","objeto agregado correctamente");
//     IDBData.add(objeto);
// };

// const readObject = () => {
//     const IDBData = getIDBData("readonly");
//     const cursor = IDBData.openCursor();
//     cursor.addEventListener("success", ()=>{
//         if (cursor.result){
//             console.log(cursor.result.value);
//             cursor.result.continue();

//         }else{
//             console.log("todos los datos fueron leidos")
//         }
//     })
// }

// const ugradeObject = (key,objeto) =>{
//     const IDBData = getIDBData("readwrite","objeto modificado  correctamente");
//     IDBData.put(key,objeto);
// };

// const deleteObject = (key) =>{
//     const IDBData = getIDBData("readwrite","objeto eliminado  correctamente");
//     IDBData.delete(key)
// };


// ejercicio ejemplo


const IDBRequest = indexedDB.open("ccpcDB", 1); // window.indexedDB

IDBRequest.addEventListener("upgradeneeded", () => {
    const db = IDBRequest.result;
    db.createObjectStore("nombres", {
        autoIncrement: true
    })
})

IDBRequest.addEventListener("success", () => {
    readObject();
})

IDBRequest.addEventListener("error", () => {
    console.log("ocurrio un error al abrir la base de datos")
})


document.getElementById('add').addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    if (nombre.length > 0) {
        if (document.querySelector(".posible") != undefined) {
            if (confirm("Hay elementos sin guardarr: ¿quieres continuar?")) {
                addObject({ nombre });
                readObject();
            }
        }else{
            addObject({ nombre });
            readObject();
        }
    }
})


const getIDBData = (mode, msg) => {
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres", mode);
    const objectStore = IDBtransaction.objectStore("nombres");
    IDBtransaction.addEventListener("complete", () => {
        console.log(msg);
    });
    return objectStore;
}

const addObject = (objeto) => {
    const IDBData = getIDBData("readwrite", "objeto agregado correctamente");
    IDBData.add(objeto);
};

const readObject = () => {
    const IDBData = getIDBData("readonly", "objeto leido correctamente");
    const cursor = IDBData.openCursor();
    const fragment = document.createDocumentFragment();
    document.querySelector(".nombres").innerHTML = "";
    cursor.addEventListener("success", () => {
        if (cursor.result) {
            let elemento = nombresHTML(cursor.result.key, cursor.result.value);
            fragment.appendChild(elemento)
            cursor.result.continue();

        } else {
            document.querySelector(".nombres").appendChild(fragment)
        }
    })
}

const upgradeObject = (key, objeto) => {
    const IDBData = getIDBData("readwrite", "objeto modificado  correctamente");
    IDBData.put(key, objeto);
};

const deleteObject = (key) => {
    const IDBData = getIDBData("readwrite", "objeto eliminado  correctamente");
    IDBData.delete(key)
};

const nombresHTML = (id, name) => {
    const container = document.createElement("DIV");
    const h2 = document.createElement("h2");
    const options = document.createElement("DIV");
    const saveButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    container.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete");

    saveButton.textContent = "Guardar";
    deleteButton.textContent = "Eliminar";

    h2.textContent = name.nombre;
    h2.setAttribute("contenteditable", "true");
    h2.setAttribute("spellcheck", "false");

    options.appendChild(saveButton);
    options.appendChild(deleteButton);

    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener("click", () => {
        saveButton.classList.replace("imposible", "posible")
    })

    saveButton.addEventListener("click", () => {
        if (saveButton.className == "posible") {
            upgradeObject(id, { nombre: h2.textContent });
            saveButton.classList.replace("posible", "imposible");
        }
    })

    deleteButton.addEventListener("click", () => {
        deleteObject(id);
        document.querySelector(".nombres").removeChild(container);
    })

    return container;

}