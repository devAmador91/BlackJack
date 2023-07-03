

document.querySelector('#app').innerHTML = `
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Blackjack</title>
<link rel="stylesheet" href="./assets/Css/styles.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
</head>

<body>
<header class="titulo">
    Blackjack
</header>

<div class="row">

    <div class="container-button">

        <button class="btn btn-danger" id="nuevoJuego">Nuevo Juego</button>
        <button class="btn btn-primary" id="pedirCarta">Pedir Carta</button>
        <button class="btn btn-primary" id="detener">Detener</button>

    </div>

</div>

<div class="row">
    <div class="col mt-4">
        <h1>Jugador 1 - <small id="puntuacionJugador">0</small></h1>

        <div id="jugador-usuario">

        </div>
    </div>

</div>

<div class="row">
    <div class="col mt-4">
        <h1>Computadora - <small id="puntuacionComputadora">0</small></h1>

        <div id="jugador-computadora">

        </div>
    </div>

</div>

</body>
`