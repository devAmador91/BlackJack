//Patron modulo -> Seguridad

import { shuffle } from 'underscore';

(() => {
  "use strict";
  let deck = [];

  const tipos = ["C", "D", "H", "S"],
        especiales = ["A", "J", "Q", "K"];

  let puntuacionUsuario = 0,
      puntuacionComputadora = 0;

  //Botones

  const btnPedir = document.getElementById("pedirCarta"),
        btnNuevoDeck = document.getElementById("nuevoJuego"),
        btnPararBarajeo = document.getElementById("detener");

  //Crear nueva baraja barajeada
  const crearDeck = () => {
    deck = [];
    for (let tipo of tipos) {
      for (let i = 2; i <= 10; i++) {
        deck.push(i + tipo);
      }
    }

    for (let tipo of tipos) {
      for (let esp of especiales) {
        deck.push(esp + tipo);
      }
    }

    deck = shuffle(deck);
  };

  const inicializarJuego = () =>{
    crearDeck();
  };
 

  //Tomar una carta
  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay cartas en el mazo";
    }
    return deck.pop();
  };

  //valorCarta
  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return isNaN(valor) ? (valor === "A" ? 11 : 10) : parseInt(valor);
  };

  //puntuacion

  const puntuacionTotal = (valor, jugador) => {
    //Agregar puntuacion al tablero

    if (jugador === "usuario") {
      puntuacionUsuario += valor;
      document.getElementById("puntuacionJugador").textContent =
        puntuacionUsuario;
    } else {
      puntuacionComputadora += valor;
      document.getElementById("puntuacionComputadora").textContent =
        puntuacionComputadora;
    }

    //Verificar ganador
    if (jugador === "usuario") {
      if (puntuacionUsuario > 21) {
        btnPedir.disabled = true;
        btnPararBarajeo.disabled = true;
        setTimeout(() => {
          alert("Perdiste");
        }, 1000);

        ingresarCarta("computadora");
      } else if (puntuacionUsuario === 21) {
        btnPedir.disabled = true;
        btnPararBarajeo.disabled = true;
        setTimeout(() => {
          alert("Haz Ganado");
        }, 1000);
      }
    } else if (jugador === "computadora") {
      if (puntuacionComputadora === 21) {
        btnPedir.disabled = true;
        btnPararBarajeo.disabled = true;
        setTimeout(() => {
          alert("Perdiste");
        }, 1000);
      } else if (puntuacionComputadora >= puntuacionUsuario) {
        if (puntuacionComputadora === puntuacionUsuario) {
          btnPedir.disabled = true;
          btnPararBarajeo.disabled = true;
          setTimeout(() => {
            alert("Empate");
          }, 1000);
        } else if (puntuacionComputadora < 21) {
          btnPedir.disabled = true;
          btnPararBarajeo.disabled = true;
          setTimeout(() => {
            alert("Perdiste");
          }, 1000);
        } else {
          btnPedir.disabled = true;
          btnPararBarajeo.disabled = true;
          setTimeout(() => {
            alert("Haz Ganado");
          }, 1000);
        }
      }
    }
  };

  //ingresar nueva carta al tablero

  const ingresarCarta = (jugador) => {
    let cartaObtenida = pedirCarta(),
        carta = document.createElement("img");


    carta.src = `../../public/cartas/${cartaObtenida}.png`;
    carta.classList.add("carta");

    //Agregar carta al tablero
    if (jugador === "usuario") {
      document.getElementById("jugador-usuario").appendChild(carta);
    } else {
      document.getElementById("jugador-computadora").appendChild(carta);
    }

    //Checar puntuacion
    puntuacionTotal(valorCarta(cartaObtenida), jugador);
  };

  //detener

  const detener = () => {
    do {
      ingresarCarta("computadora");
    } while (puntuacionComputadora < puntuacionUsuario);
  };

  //Boton nuevo juego
  btnNuevoDeck.addEventListener("click", () => {
    //Eliminar los nodos del div
    const tableroJugador = document.getElementById("jugador-usuario"),
          tableroComputadora = document.getElementById("jugador-computadora");
    tableroJugador.innerHTML = "";
    tableroComputadora.innerHTML = "";
    //Restablcer puntuacion
    puntuacionUsuario = 0;
    puntuacionComputadora = 0;
    document.getElementById("puntuacionJugador").textContent =
      puntuacionUsuario;
    document.getElementById("puntuacionComputadora").textContent =
      puntuacionComputadora;
    //Activar botones
    btnPedir.disabled = false;
    btnPararBarajeo.disabled = false;
    inicializarJuego();
    });

  //Boton pedir carta

  btnPedir.addEventListener("click", () => ingresarCarta("usuario"));

  //Boton Detener
  btnPararBarajeo.addEventListener("click", detener);
})();
