window.addEventListener('load', iniciarJuego)

const botonMascota = document.getElementById('boton_mascota')
const botonFuego = document.getElementById('boton_fuego')
const botonAgua = document.getElementById('boton_agua')
const botonPiedra = document.getElementById('boton_piedra')
const botonReiniciar = document.getElementById('boton_reiniciar')
const seccionSeleccionarAtaque = document.getElementById('seleccionar_ataque')
const seccionReiniciarJuego = document.getElementById('seccion_reiniciar')
const spanMascotaJugador = document.getElementById('mascota_jugador')
const spanMascotaPc = document.getElementById('mascota_pc')
const seccionSeleccionarMascota = document.getElementById('seleccionar_mascota')
const spanImagenPc = document.getElementById('imagen_pc')
const pNotificaciones = document.getElementById('notificaciones')
const pAtaquesJugador = document.getElementById('ataques_jugador')
const pAtaquesPc = document.getElementById('ataques_pc')
const sectionMensajes = document.getElementById('notificaciones')
const spanImagenJugador = document.getElementById('imagen_jugador')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

//VARIABLES GLOBALES
let pokemons = []
let opcionDePokemon
let imputLangostino 
let imputFocaccia
let imputYama
let imputDragon
let imputRock
let imputGranito
let ataqueJugador = 'nada'
let ataquePc
let vidasJugador = 3
let vidasPc = 3
let spanVidasJugador = document.getElementById('vidas_jugador')
let spanVidasPc = document.getElementById('vidas_pc')
let nRonda = 0

class Pokemon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let langostino = new Pokemon('Langostino', "assets/langostino.png", 5)
let focaccia = new Pokemon('Focaccia', "assets/focaccia.png", 5)
let llama = new Pokemon('Llama', "assets/llama.png", 5)
let dragon = new Pokemon('Dragon', "assets/dragon_cuerpo.png", 5)
let roca = new Pokemon('Roca', "assets/roca.png", 5)
let escorpion = new Pokemon('Escorpión', "assets/granito.png", 5)

langostino.ataques.push(
    {nombre: '💦', id: 'boton_agua'},
    {nombre: '💦', id: 'boton_agua'},
    {nombre: '💦', id: 'boton_agua'},
    {nombre: '🪨', id: 'boton_piedra'},
    {nombre: '🪨', id: 'boton_piedra'},
)

focaccia.ataques.push(
    {nombre: '🔥', id: 'boton_fuego'},
    {nombre: '🔥', id: 'boton_fuego'},
    {nombre: '💦', id: 'boton_agua'},
    {nombre: '💦', id: 'boton_agua'},
    {nombre: '🪨', id: 'boton_piedra'},
)

llama.ataques.push(
    {nombre: '🪨', id: 'boton_piedra'},
    {nombre: '🪨', id: 'boton_piedra'},
    {nombre: '🪨', id: 'boton_piedra'},
    {nombre: '🔥', id: 'boton_fuego'},
    {nombre: '🔥', id: 'boton_fuego'},
)

pokemons.push(langostino,focaccia,llama,dragon,roca,escorpion)

//FUNCION A EJECUTAR CUANDO CARGA LA PÁGINA
function iniciarJuego() {
    pokemons.forEach((pokemon) => {
        opcionDePokemon = `
        <input type="radio" name="mascota" id="${pokemon.nombre}" class="input_mascota">
        <label class="tarjeta" for="${pokemon.nombre}">
            <p>${pokemon.nombre}</p>
            <img class="imagen_pokemon" src="${pokemon.foto}" alt="${pokemon.nombre}">
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDePokemon

         imputLangostino = document.getElementById('Langostino')
         imputFocaccia = document.getElementById('Focaccia')
         imputYama = document.getElementById('Llama')
         imputDragon = document.getElementById('Dragon')
         imputRock = document.getElementById('Roca')
         imputGranito = document.getElementById('Escorpión')
    })

    //AL PULSAR SELECCIONAR MASCOTA, INICIA F.SELECCIONMASCOTA
    botonMascota.addEventListener('click', seleccionarMascotaJugador)
    botonMascota.addEventListener('click', seleccionImagenJugador)
    //AL PULSAR BOTONES DE ATAQUES, INICIA F.ATAQUEX
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonPiedra.addEventListener('click', ataquePiedra)
    //AL PULSAR REINICIAR, INICIA F.REINICIAR
    botonReiniciar.addEventListener('click', reiniciar)
    //ESCONDER SECCIÓN ATAQUE
    seccionSeleccionarAtaque.style.display = 'none'
    seccionReiniciarJuego.style.display = 'none'

}

//FUNCIÓN NUMERO ALEATORIO ENTRE MAXIMO Y MÍNIMO
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
//ENCONTRAR MASCOTAJUGADOR ELEGIDA Y ESCRIBIR AMBAS MASCOTAS EN SPAN
function seleccionarMascotaJugador() {
    
    //SEGÚN MASCOTA CHEKEADA, MOSTRAR 'MASCOTAX' EN EL SPAN ELEGIDO, SINO, ALERTA SELECCIONAR MASCOTA
    if (imputLangostino.checked == true) 
    {
        spanMascotaJugador.innerHTML = imputLangostino.id
    }
    else if (imputFocaccia.checked == true) {
        spanMascotaJugador.innerHTML = imputFocaccia.id
    }
    else if (imputYama.checked == true) {
        spanMascotaJugador.innerHTML = imputYama.id
    }
    else if (imputDragon.checked == true) {
        spanMascotaJugador.innerHTML = imputDragon.id
    }
    else if (imputRock.checked == true) {
        spanMascotaJugador.innerHTML = imputRock.id
    }
    else if (imputGranito.checked == true) {
        spanMascotaJugador.innerHTML = imputGranito.id
    }
    else
    {
        alert('SELECCIONA UNA MASCOTA')
        spanMascotaPc='' //si el jugador no selecciona mascota el pc tampoco
    }
    //ESCRIBIR LA ELECCION DEL PC EN EL SPAN DE MASCOTAPC
    eleccionPc()

    if (spanMascotaJugador.innerHTML !== '') {
        //DESBLOQUEAR BOTONES ATAQUE
        botonFuego.disabled = false
        botonAgua.disabled = false
        botonPiedra.disabled = false
        //CAMBIAR SECCION SELECCIONAR JUGADOR POR SECCION SELECCIONAR ATAQUE
            //OCULTAR SECCION MASCOTA
            seccionSeleccionarMascota.style.display = 'none'
            //MOSTRAR SECCIÓN ATAQUE
            seccionSeleccionarAtaque.style.display = 'flex'


        //BLOQUEAR BOTON SELECCIONAR MASCOTA
        botonMascota.disabled = true
    }

}

//ELEGIR MASCOTA ALEATORIA PC y colocarle su imagen
function eleccionPc() {
    var numeroAleatorio = aleatorio(0,pokemons.length-1)
    spanMascotaPc.innerHTML = pokemons[numeroAleatorio].nombre
    spanImagenPc.innerHTML = `<img src="${pokemons[numeroAleatorio].foto}" alt="" class="imagen_personaje">`

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

    pNotificaciones.innerHTML = resultado

    pAtaquesJugador.innerHTML = ataqueJugador
    
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
    sectionMensajes.innerHTML = resultadoFinal

    //MOSTRAR REINICIAR
    seccionReiniciarJuego.style.display = 'flex'

    //DESACTIVAMOS BOTONES ATAQUE
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonPiedra.disabled = true
}   
//REINICIA: MENSAJES, VIDAS, Y MASCOTAS
function reiniciar() {
    location.reload()
}

function seleccionImagenJugador() {
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