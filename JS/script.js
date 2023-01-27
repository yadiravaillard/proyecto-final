let btnVerMas = document.getElementById("btnVerMas");
let seccionOculta = document.getElementById("seccionOculta");

btnVerMas.addEventListener("click", mostrar)

function mostrar() {
    seccionOculta.classList.toggle("mostrar")
    if (seccionOculta.classList.contains("mostrar")) {
        btnVerMas.innerHTML = "ver menos"
    } else {
        btnVerMas.innerHTML = "ver más"
    }
}

document.getElementById("btnOscuro").addEventListener("click", function () {
	document.body.style.backgroundColor = "blueviolet" 
})

document.getElementById("btnClaro").addEventListener("click", function () {
	document.body.style.backgroundColor = "aliceblue"
})
