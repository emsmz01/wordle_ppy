let intentos = 6;
let palabra;
const BOTON = document.getElementById("guess-button");
const API = 'https://random-word-api.vercel.app/api?words=1&length=5&type=uppercase&alphabetize=true';

fetch(API).then(response => response.json())
    .then(response => {
        palabra = response[0];
    })
    .catch(err => console.log(err));

BOTON.addEventListener("click", intentar);

function leerIntento() {
    let intento = document.getElementById("guess-input");
    return intento.value.toUpperCase();
}

function intentar() {
    const INTENTO = leerIntento();
    if (INTENTO.length === 5) {
        const GRID = document.getElementById("grid");
        const ROW = document.createElement('div');
        ROW.className = 'row';
        if (INTENTO === palabra) {
            for (let i in palabra) {
                const SPAN = document.createElement('span');
                SPAN.className = 'letter';
                SPAN.innerHTML = INTENTO[i];
                SPAN.style.border = '#43A047';
                SPAN.style.backgroundColor = '#43A047';
                ROW.appendChild(SPAN);
            }
            GRID.appendChild(ROW);
            terminar("<h1>GANASTE!😀</h1>")
            return
        }
        for (let i in palabra) {
            const SPAN = document.createElement('span');
            SPAN.className = 'letter';
            SPAN.innerHTML = INTENTO[i];

            if (INTENTO[i] === palabra[i]) {
                SPAN.style.border = '#43A047';
                SPAN.style.backgroundColor = '#43A047';
            } else if (palabra.includes(INTENTO[i])) {
                SPAN.style.border = '#E4A81D';
                SPAN.style.backgroundColor = '#E4A81D';
            } else {
                SPAN.style.border = '#757575'
                SPAN.style.backgroundColor = '#757575';
            }
            ROW.appendChild(SPAN);
        }
        GRID.appendChild(ROW);

        intentos--
        if (intentos == 0) {
            terminar("<h1>PERDISTE!😖</h1>");
            imprimirPalabra("La palabra era: " + palabra);
        }
    }
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
function imprimirPalabra(palabra) {
    let contenedor = document.getElementById('acierto');
    contenedor.innerHTML = palabra;
}
function limpia(elemento) {
    elemento.value = "";

}
function verifica(elemento) {
    if (elemento.value == "") {
        elemento.value = "Valor por defecto"
    }
}