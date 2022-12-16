window.addEventListener('load', iniciarJuego)

//VARIABLES GLOBALES
let ataqueJugador = 'nada'
let ataquePc
let vidasJugador = 3
let vidasPc = 3
let spanVidasJugador = document.getElementById('vidas_jugador')
let spanVidasPc = document.getElementById('vidas_pc')
let nRonda = 0


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
        spanMascotaJugador.innerHTML = 'Llama'
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
        spanImagenPc.innerHTML = '<img src="assets/langostino.png" alt="" class="imagen_personaje">'
        return 'Langostino'
    }
    else
    if (numeroAleatorio == '2')
    {
        spanImagenPc.innerHTML = '<img src="assets/focaccia.png" alt="" class="imagen_personaje">'
        return 'Focaccia'
    }
    else
    if (numeroAleatorio == '3')
    {
        spanImagenPc.innerHTML = '<img src="assets/llama.png" alt="" class="imagen_personaje">'
        return 'Llama'
    }
    if (numeroAleatorio == '4')
    {
        spanImagenPc.innerHTML = '<img src="assets/dragon_cuerpo.png" alt="" class="imagen_personaje">'
        return 'Dragon'
    }
    if (numeroAleatorio == '5')
    {
        spanImagenPc.innerHTML = '<img src="assets/roca.png" alt="" class="imagen_personaje">'
        return 'Rock'
    }
    if (numeroAleatorio == '6')
    {
        spanImagenPc.innerHTML = '<img src="assets/granito.png" alt="" class="imagen_personaje">'
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
    ataqueJugador='Fuego🔥'
    eleccionAtaquePc()

}
function ataqueAgua()
{
    ataqueJugador='Agua💦'
    eleccionAtaquePc()

}
function ataquePiedra()
{
    ataqueJugador='Piedra🪨'
    eleccionAtaquePc()

}


//FUNCION ELECCION ATAQUE PC - Asignamos palabra a ataquePc Y CORAZONES
function eleccionAtaquePc() {
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == '1')
    {
        ataquePc = 'Fuego🔥'
    }
    else
    if (ataqueAleatorio == '2')
    {
        ataquePc = 'Agua💦'
    }
    else
    if (ataqueAleatorio == '3')
    {
        ataquePc = 'Piedra🪨'
    }
    combate()

    //CORAZONES DEL JUGADOR
    if (vidasJugador == 3) {
        document.getElementById('corazones_jugador').innerHTML = '❤️❤️❤️'
    }
    else if (vidasJugador == 2)
    {
        document.getElementById('corazones_jugador').innerHTML = '❤️❤️'
    }
    else if (vidasJugador == 1)
    {
        document.getElementById('corazones_jugador').innerHTML = '❤️'
    }
    else if (vidasJugador == 0)
    {
        document.getElementById('corazones_jugador').innerHTML = '💀'
    }
    
    //CORAZONES DEL PC
    if (vidasPc == 3) {
        document.getElementById('corazones_pc').innerHTML = '❤️❤️❤️'
    }
    else if (vidasPc == 2)
    {
        document.getElementById('corazones_pc').innerHTML = '❤️❤️'
    }
    else if (vidasPc == 1)
    {
        document.getElementById('corazones_pc').innerHTML = '❤️'
    }
    else if (vidasPc == 0)
    {
        document.getElementById('corazones_pc').innerHTML = '💀'
    }

    nRonda++
    document.getElementById('ronda').innerHTML = 'Ronda'+' '+nRonda
}

//FUNCION COMBATE
function combate() {

    if (ataquePc == ataqueJugador) {
        crearMensaje('EMPATE')
    }
    else
    if (ataqueJugador == 'Fuego🔥' && ataquePc == 'Piedra🪨' || ataqueJugador == 'Agua💦' && ataquePc == 'Fuego🔥' || ataqueJugador == 'Piedra🪨' && ataquePc == 'Agua💦') {
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
   // let sectionMensajes = document.getElementById('mensajes')
   // let parrafo= document.createElement('p')
   // parrafo.innerHTML = 'Tu mascota ataca con '+ataqueJugador+' y el enemigo ataca con '+ataquePc+ ' - '+resultado
   // sectionMensajes.appendChild(parrafo)

    let pNotificaciones = document.getElementById('notificaciones')
    pNotificaciones.innerHTML = resultado

    let pAtaquesJugador = document.getElementById('ataques_jugador')
    pAtaquesJugador.innerHTML = ataqueJugador
    
    let pAtaquesPc = document.getElementById('ataques_pc')
    pAtaquesPc.innerHTML = ataquePc
}   
//Revisar las vidas e invocar funcion mensajeFinal
function revisarVidas() {
    if (vidasJugador <= 0)
    {
        mensajeFinal('FINAL! HAS PERDIDO')
    }
    else if (vidasPc <= 0)
    {
        mensajeFinal('FINAL! HAS GANADO')
    }
}
//CREA MENSAJE FINAL CON RESULTADO EN LA SECTION MENSAJE
function mensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('notificaciones')
    sectionMensajes.innerHTML = resultadoFinal

    //MOSTRAR REINICIAR
    let seccionReiniciarJuego = document.getElementById('seccion_reiniciar')
    seccionReiniciarJuego.style.display = 'flex'

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

    if (imputLangostino.checked == true) 
    {
        spanImagenJugador.innerHTML = '<img src="assets/langostino.png" alt="" class="imagen_personaje">'
    }
    else if (imputFocaccia.checked == true) {
        spanImagenJugador.innerHTML = '<img src="assets/focaccia.png" alt="" class="imagen_personaje">'
    }
    else if (imputYama.checked == true) {
        spanImagenJugador.innerHTML = '<img src="assets/llama.png" alt="" class="imagen_personaje">'
    }
    else if (imputDragon.checked == true) {
        spanImagenJugador.innerHTML = '<img src="assets/dragon_cuerpo.png" alt="" class="imagen_personaje">'
    }
    else if (imputRock.checked == true) {
        spanImagenJugador.innerHTML = '<img src="assets/roca.png" alt="" class="imagen_personaje">'
    }
    else if (imputGranito.checked == true) {
        spanImagenJugador.innerHTML = '<img src="assets/granito.png" alt="" class="imagen_personaje">'
    }


}