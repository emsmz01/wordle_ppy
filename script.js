let intentos = 6;
let palabra = "APPLE";
const button = document.getElementById("guess-button");

button.addEventListener("click", intentar);
window.addEventListener('load', init)
function leerIntento(){
    let intento = document.getElementById("guess-input");
    return intento.value.toUpperCase();
}

function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
            terminar("<h1>GANASTE!😀</h1>")
            return
        }
    for (let i in palabra){
        if (INTENTO[i]===palabra[i]){
            console.log(INTENTO[i], "VERDE")
        } else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "AMARILLO")
        } else {
            console.log(INTENTO[i], "GRIS")
        }
    }
	intentos--
    if (intentos==0){
            terminar("<h1>PERDISTE!😖</h1>")
        }

}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
    
        
