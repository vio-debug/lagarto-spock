

function obtenerOpcionJugador(jugador){
    var arma = prompt("Hola "+ jugador + ". ¿Qué arma te gustaría usar? Escriba: piedra🪨, papel🧻, tijeras✂️, lagarto🦕 o spock🤖");
    var estabien = esOpcionValida(arma);

    while(estabien == false) {
        arma = prompt("Perdona no te he entendido🤐 "+ jugador + ". ¿Qué arma te gustaría usar? Escriba: piedra🪨, papel🧻, tijeras✂️, lagarto🦕 o spock🤖");
        estabien = esOpcionValida(arma);
    }

    return arma;
}

function esOpcionValida(arma) {
    switch (arma.toLowerCase()) {
        case "tijeras":
        return true;

        case "papel":
        return true;

        case "piedra":
        return true;

        case "lagarto":
        return true;

        case "spock":
        return true;

        default:
        return false;
    }
}

function determinarGanador(jugador1, jugador2, contador1, contador2) {
    if((jugador1=="piedra" && jugador2=="tijeras") || 
        (jugador1=="tijeras" && jugador2=="papel") || 
        (jugador1=="papel" && jugador2=="piedra") ||
        (jugador1=="piedra" && jugador2=="lagarto") ||
        (jugador1=="lagarto" && jugador2=="spock") ||
        (jugador1=="spock" && jugador2=="tijeras") ||
        (jugador1=="tijeras" && jugador2=="lagarto") ||
        (jugador1=="lagarto" && jugador2=="papel") ||
        (jugador1=="papel" && jugador2=="spock") ||
        (jugador1=="spock" && jugador2=="piedra")) {
            return 1;
            
        } else if (jugador1 == jugador2) {
            return 0;
            
        } else {
            return 2;

        }
}

function anunciarGanadore(codigo, nombre1, nombre2) {
    switch (codigo) {
        case 0:
        return "¡¡EMPATE!!";

        case 1:
        return nombre1 + " gana!!!!";

        case 2:
        return nombre2 + " gana!!!!";
    }
    

}

const nombre1 = prompt("¿Cuál es tu increíble nombre, jugador1?");
const nombre2 = prompt("¿Cuál es tu increíble nombre, jugador2?");
const rondas = prompt("¿Cuántas rondas queréis jugar?");
let contador1 = 0;
let contador2 = 0;
const arma1 = obtenerOpcionJugador(nombre1);
const arma2 = obtenerOpcionJugador(nombre2);
alert(anunciarGanadore(determinarGanador(arma1, arma2), nombre1, nombre2));
