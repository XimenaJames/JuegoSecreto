//************************************************************************************************//
//EJEMPLO QUE SE TRABAJO EN CLASE CURSO 2 MODULO 4

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; // Guardara los numeros que ya fueron sorteados para que no se vayan a repetir
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        //asignarTextoElemento('p','Acertaste el numero');
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez':'veces'}`);
        //Habilita el boton Nuevo Juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuarion no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','el numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos = intentos+1;
        limpiarCaja();
    }
    return; 
}


//Funcion para borrar el número anterior en la caja y no tener que hacerlo manualmente cada que se inserta un número
function limpiarCaja() {
    document.querySelector('#valorUsuario').value ='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        // Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); //Recursividad de una funcion!!
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
   
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Selecciona un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //La siguiente funcion realiza 3 cosas para reiniciar el juego:
    // 1) Poner mensaje "Indica un numero del 1 al 10" 2) Generar nuevo numero aleatorio 3)Reinicia la variable "intentos"
    condicionesIniciales();
    //Desabilitar boton "Nuevo Juego"
    //document.getElementById('reiniciar').setAttribute('disabled', true);
    document.querySelector('#reiniciar').setAttribute('disabled', true);

}

condicionesIniciales();