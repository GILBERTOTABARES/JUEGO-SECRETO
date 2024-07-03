let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarElemento(elemento, texto)
 {let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
    let numeroDeUsuario =parseInt(document.getElementById("valorUsuario").value);
   
   if (numeroDeUsuario === numeroSecreto) {
    asignarElemento("p", `Acertaste el Numero secreto en ${intentos} ${(intentos === 1) ? "intent0" : "intentos"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
   } else {
        //EL USUARIO NO ACERTO
        if (numeroDeUsuario > numeroSecreto) {
            asignarElemento("p","El numero secreto es menor");
        }
        else {
      asignarElemento("p","El numero secreto es mayor")};
   }
    intentos++;
    limpiarCaja();
    return;
}
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
console.log(numeroGenerado);
console.log(listaNumerosSorteados);

if (listaNumerosSorteados.length == numeroMaximo) {
    asignarElemento("p", "Ya se sortearon todos los numeros posibles");
}
else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
}
    else {listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}}

    
}
function condicionesIniciales(){
    asignarElemento("h1","Juego del numero secreto");
    asignarElemento("p",`Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
        //limpiar caja
        limpiarCaja();
        //Indicar mensaje de valor de 1 a 10
        condicionesIniciales()
        //generar numero aleatorio
        //desactivar boton de reiniciar juego
        //inicializar intentos
        document.querySelector("#reiniciar").setAttribute ("disabled" , "true");
        
}
condicionesIniciales();