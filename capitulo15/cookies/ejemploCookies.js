//ejemplo de uso (aviso de uso de cookies, cumplimiento con el RGPD y la ePrivacy)


const newDateUTC = dias => {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias * 1000 * 60 * 60 * 24);
    return fecha.toUTCString();
};

const crearCookie = (nombre, dias) => {
    expires = newDateUTC(dias)
    document.cookie = `${nombre};expires=${expires}`;
};


const obtenerCookie = cookieName => {
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for (i = 0; cookies.length > i; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName)) {
            return cookie.split("=")[1];
        }
    }
    return " no hay cookies con ese nombre ";
}

if (obtenerCookie("acceptedCookies") !== "si") {
    setTimeout(() => {
        document.querySelector(".bg-modal").style.zIndex = "10";
        document.querySelector(".bg-modal").style.opacity = "1";
        document.getElementById("accept").addEventListener("click", () => {
            crearCookie("acceptedCookies=si", 30);
            document.querySelector(".bg-modal").style.opacity = "0";
            setTimeout(() => {
                document.querySelector(".bg-modal").style.zIndex = "-1";
            },1000)
        })
        document.getElementById("deny").addEventListener("click", () => {
            crearCookie("acceptedCookies=no", 30);
            document.querySelector(".bg-modal").style.opacity = "0";
            setTimeout(() => {
                document.querySelector(".bg-modal").style.zIndex = "-1";
            },1000)
        })
    }, 200)
}