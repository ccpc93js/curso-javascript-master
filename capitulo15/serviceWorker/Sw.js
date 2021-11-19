"use stric"

let version = "version 2";

self.addEventListener("install", e=>{
    console.log("instalando service worker");
    caches.open(version).then(cache =>{
        cache.add("index.html").then(res=>{
            console.log("Informacion cacheada");
        }).catch(e=>{
            console.log(e);
        })
    })
});

self.addEventListener("activate", ()=>{
    caches.keys().then(key=>{
        return Promise.all(
            key.map(cache=>{
                if(cache !== version){
                    cache.delete();
                    console.log("cahe antiguo, eliminado");
                    return caches.delete(cache)
                }
            })
        )
    })
});

self.addEventListener("fetch", e=>{
    e.respondWith(async function(){
        const respuestaEnCache = await caches.match(e.request);
        if(respuestaEnCache) return respuestaEnCache;
        return e.request;
    })
});