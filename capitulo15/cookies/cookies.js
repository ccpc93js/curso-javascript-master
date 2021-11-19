//  Cookies:  clave=valor;atributo;atributo;atributo...  

const newDateUTC = dias => {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias * 1000 * 60 * 60 * 24);
    return fecha.toUTCString();
};

const crearCookie = (nombre, dias) => {
    expires = newDateUTC(dias)
    document.cookie = `${nombre};expires=${expires}`;
};

crearCookie("usuario=ccpc","4");

const obtenerCookie = cookieName =>{
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for(i = 0; cookies.length > i; i++){
       let cookie = cookies[i].trim();
        if(cookie.startsWith(cookieName)){
            return cookie.split("=")[1 ]
        }
    } 
    return " no hay cookies con ese nombre "; 
}