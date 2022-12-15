window.addEventListener('load', iniciarJuego)

//VARIABLES GLOBALES
let ataqueJugador = 'nada'
let ataquePc
let vidasJugador = 3
let vidasPc = 3
let spanVidasJugador = document.getElementById('vidas_jugador')
let spanVidasPc = document.getElementById('vidas_pc')

//FUNCION A EJECUTAR CUANDO CARGA LA PÁGINA
function iniciarJuego() {

    //AL PULSAR SELECCIONAR MASCOTA, INICIA F.SELECCIONMASCOTA
    let botonMascota = document.getElementById('boton_mascota')
    botonMascota.addEventListener('click', seleccionarMascotaJugador)
    botonMascota.addEventListener('click', seleccionImagenJugador)

    //AL PULSAR BOTONES DE ATAQUES, INICIA F.ATAQUEX
    let botonFuego = document.getElementById('boton_fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton_agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonPiedra = document.getElementById('boton_piedra')
    botonPiedra.addEventListener('click', ataquePiedra)

    //AL PULSAR REINICIAR, INICIA F.REINICIAR
    let botonReiniciar = document.getElementById('boton_reiniciar')
    botonReiniciar.addEventListener('click', reiniciar)

    //ESCONDER SECCIÓN ATAQUE
    let seccionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
    seccionSeleccionarAtaque.style.display = 'none'
    let seccionReiniciarJuego = document.getElementById('seccion_reiniciar')
    seccionReiniciarJuego.style.display = 'none'

}

//FUNCIÓN NUMERO ALEATORIO ENTRE MAXIMO Y MÍNIMO
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
//ENCONTRAR MASCOTAJUGADOR ELEGIDA Y ESCRIBIR AMBAS MASCOTAS EN SPAN
function seleccionarMascotaJugador() {
    let imputLangostino = document.getElementById('langostino')
    let imputFocaccia = document.getElementById('focaccia')
    let imputYama = document.getElementById('yama')
    let imputDragon = document.getElementById('dragon')
    let imputRock = document.getElementById('rock')
    let imputGranito = document.getElementById('granito')


    let spanMascotaJugador = document.getElementById('mascota_jugador')
    let spanMascotaPc = document.getElementById('mascota_pc')

    
    //SEGÚN MASCOTA CHEKEADA, MOSTRAR 'MASCOTAX' EN EL SPAN ELEGIDO, SINO, ALERTA SELECCIONAR MASCOTA
    if (imputLangostino.checked == true) 
    {
        spanMascotaJugador.innerHTML = 'Langostino'
    }
    else if (imputFocaccia.checked == true) {
        spanMascotaJugador.innerHTML = 'Focaccia'
    }
    else if (imputYama.checked == true) {
        spanMascotaJugador.innerHTML = 'Yama'
    }
    else if (imputDragon.checked == true) {
        spanMascotaJugador.innerHTML = 'Dragon'
    }
    else if (imputRock.checked == true) {
        spanMascotaJugador.innerHTML = 'Rock'
    }
    else if (imputGranito.checked == true) {
        spanMascotaJugador.innerHTML = 'Escorpión'
    }
    else
    {
        alert('SELECCIONA UNA MASCOTA')
        spanMascotaPc='' //si el jugador no selecciona mascota el pc tampoco
    }
    //ESCRIBIR LA ELECCION DEL PC EN EL SPAN DE MASCOTAPC
    spanMascotaPc.innerHTML = eleccionPc()

    if (spanMascotaJugador.innerHTML !== '') {
        //DESBLOQUEAR BOTONES ATAQUE
        let botonFuego = document.getElementById('boton_fuego')
        botonFuego.disabled = false
        let botonAgua = document.getElementById('boton_agua')
        botonAgua.disabled = false
        let botonPiedra = document.getElementById('boton_piedra')
        botonPiedra.disabled = false
        //CAMBIAR SECCION SELECCIONAR JUGADOR POR SECCION SELECCIONAR ATAQUE
            //OCULTAR SECCION MASCOTA
            let seccionSeleccionarMascota = document.getElementById('seleccionar_mascota')
            seccionSeleccionarMascota.style.display = 'none'
            //MOSTRAR SECCIÓN ATAQUE
            let seccionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
            seccionSeleccionarAtaque.style.display = 'flex'


        //BLOQUEAR BOTON SELECCIONAR MASCOTA
        let botonMascota = document.getElementById('boton_mascota')
        botonMascota.disabled = true
    }

}

//ELEGIR MASCOTA ALEATORIA PC y colocarle su imagen
function eleccionPc() {
    let spanImagenPc = document.getElementById('imagen_pc')

    let numeroAleatorio = aleatorio(1,6)
    if (numeroAleatorio == '1')
    {
        spanImagenPc.innerHTML = '<img src="assets/langostino.png" alt="">'
        return 'Langostino'
    }
    else
    if (numeroAleatorio == '2')
    {
        spanImagenPc.innerHTML = '<img src="assets/focaccia.png" alt="">'
        return 'Focaccia'
    }
    else
    if (numeroAleatorio == '3')
    {
        spanImagenPc.innerHTML = '<img src="assets/llama.png" alt="">'
        return 'Yama'
    }
    if (numeroAleatorio == '4')
    {
        spanImagenPc.innerHTML = '<img src="assets/dragon_cuerpo.png" alt="">'
        return 'Dragon'
    }
    if (numeroAleatorio == '5')
    {
        spanImagenPc.innerHTML = '<img src="assets/roca.png" alt="">'
        return 'Rock'
    }
    if (numeroAleatorio == '6')
    {
        spanImagenPc.innerHTML = '<img src="assets/granito.png" alt="">'
        return 'Escorpión'
    }
    else
    {
        return 'NULO.'
    }
}
// 3 FUNCIONES ELECCION ATAQUES NUESTROS - Asignamos nombre del ataque a ataqueJugador + invocamos F.eleccionAtaquePc
function ataqueFuego()
{
    ataqueJugador='Fuego'
    eleccionAtaquePc()

}
function ataqueAgua()
{
    ataqueJugador='Agua'
    eleccionAtaquePc()

}
function ataquePiedra()
{
    ataqueJugador='Piedra'
    eleccionAtaquePc()

}


//FUNCION ELECCION ATAQUE PC - Asignamos palabra a ataquePc
function eleccionAtaquePc() {
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == '1')
    {
        ataquePc = 'Fuego'
    }
    else
    if (ataqueAleatorio == '2')
    {
        ataquePc = 'Agua'
    }
    else
    if (ataqueAleatorio == '3')
    {
        ataquePc = 'Piedra'
    }
    combate()
}

//FUNCION COMBATE
function combate() {

    if (ataquePc == ataqueJugador) {
        crearMensaje('EMPATE')
    }
    else
    if (ataqueJugador == 'Fuego' && ataquePc == 'Piedra' || ataqueJugador == 'Agua' && ataquePc == 'Fuego' || ataqueJugador == 'Tierra' && ataquePc == 'Agua') {
        crearMensaje('GANASTE')
        vidasPc--
        spanVidasPc.innerHTML = vidasPc
    }
    else
    {
        crearMensaje('PERDISTE')  
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador

    }
    //REVISAR LAS VIDAS
    revisarVidas()
}

//FUNCION CREA MENSAJE EN LA SECCION QUE QUEREMOS CON EL TEXTO QUE QUEREMOS
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo= document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataca con '+ataqueJugador+' y el enemigo ataca con '+ataquePc+ ' - '+resultado

    sectionMensajes.appendChild(parrafo)
}   
//Revisar las vidas e invocar funcion mensajeFinal
function revisarVidas() {
    if (vidasJugador <= 0)
    {
        mensajeFinal('HAS PERDIDO')
    }
    else if (vidasPc <= 0)
    {
        mensajeFinal('HAS GANADO')
    }
}
//CREA MENSAJE FINAL CON RESULTADO EN LA SECTION MENSAJE
function mensajeFinal(resultadoFinal) {
    //MOSTRAR REINICIAR
    let seccionReiniciarJuego = document.getElementById('seccion_reiniciar')
    seccionReiniciarJuego.style.display = 'flex'

    let sectionMensajes = document.getElementById('mensajes')
    let parrafo= document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

    //DESACTIVAMOS BOTONES ATAQUE
    let botonFuego = document.getElementById('boton_fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton_agua')
    botonAgua.disabled = true
    let botonPiedra = document.getElementById('boton_piedra')
    botonPiedra.disabled = true
}   
//REINICIA: MENSAJES, VIDAS, Y MASCOTAS
function reiniciar() {
    location.reload()
}

function seleccionImagenJugador() {
    let imputLangostino = document.getElementById('langostino')
    let imputFocaccia = document.getElementById('focaccia')
    let imputYama = document.getElementById('yama')
    let imputDragon = document.getElementById('dragon')
    let imputRock = document.getElementById('rock')
    let imputGranito = document.getElementById('granito')

    let spanImagenJugador = document.getElementById('imagen_jugador')
    let spanImagenPc = document.getElementById('imagen_pc')

    if (imputLangostino.checked == true) 
    {
        spanImagenJugador.innerHTML = '<img src="assets/langostino.png" alt="">'
    }
    else if (imputFocaccia.checked == true) {
        spanImagenJugador.innerHTML = '<img src="assets/focaccia.png" alt="">'
    }
    else if (imputYama.checked == true) {
        spanImagenJugador.innerHTML = '<img src="assets/llama.png" alt="">'
    }
    else if (imputDragon.checked == true) {
        spanImagenJugador.innerHTML = '<img src="assets/dragon_cuerpo.png" alt="">'
    }
    else if (imputRock.checked == true) {
        spanImagenJugador.innerHTML = '<img src="assets/roca.png" alt="">'
    }
    else if (imputGranito.checked == true) {
        spanImagenJugador.innerHTML = '<img src="assets/granito.png" alt="">'
    }


}