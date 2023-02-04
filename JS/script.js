let btnVerMas = document.getElementById("btnVerMas");
let seccionOculta = document.getElementById("seccionOculta");

btnVerMas.addEventListener("click", mostrar)

function mostrar() {
    seccionOculta.classList.toggle("mostrar")
    if (seccionOculta.classList.contains("mostrar")) {
        btnVerMas.innerHTML = "Ver Menos"
    } else {
        btnVerMas.innerHTML = "Ver Más"
    }
}

document.getElementById("btnOscuro").addEventListener("click", function () {
	document.body.style.backgroundColor = "#00b7da"
})

document.getElementById("btnClaro").addEventListener("click", function () {
	document.body.style.backgroundColor = "aliceblue"
})