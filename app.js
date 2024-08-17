let NumeroSecreto = 0;
let intentos = 0;
let ListaNumeroGenerado = [];
let numeroMaximo = 10;

function AgregarTexto(texto, elemento) {
    let Elemento = document.querySelector(texto);
    Elemento.innerText = elemento;
}
function validarNumeros() {
    let NumeroIngresadoUsuario = parseInt(document.getElementById('NumeroUsuario').value);
    if (NumeroIngresadoUsuario >= 11 || NumeroIngresadoUsuario === 0) {
        AgregarTexto('P', `El numero esta entre el 1 y el ${numeroMaximo}`);}
    else if (NumeroIngresadoUsuario === NumeroSecreto) {
        AgregarTexto('p',`!Correcto! has adivinado el numero en ${intentos} ${(intentos === 1 ? 'intento' : 'intentos')}.`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else { if (NumeroIngresadoUsuario > NumeroSecreto) {
        AgregarTexto('p','Incorrecto, el numero es menor ');}
            else {AgregarTexto('p','Incorrecto, el numero es mayor '); }
    intentos ++;
    VaciarCaja()


    }







}

function numeroAleatorio() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1
    console.log(numeroGenerado);
   console.log(ListaNumeroGenerado);
   //si todos los numeros fueron sorteados
    if (ListaNumeroGenerado.length === numeroMaximo) {
        AgregarTexto('P', 'Todos los numeros fueros sorteados')
    } else {
        if (ListaNumeroGenerado.includes(numeroGenerado)) {
            return numeroAleatorio();
        } else {
            ListaNumeroGenerado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function CondicionesIniciales() {
    AgregarTexto('h1', 'Juego del numero secreto');
    AgregarTexto('P', `Indica un numero del 1 al ${numeroMaximo}`);
    NumeroSecreto = numeroAleatorio();
    intentos = 1;

}

function VaciarCaja() {
    document.getElementById('NumeroUsuario').value = '';
}

function ReiniciarJuego(){
    VaciarCaja();
    CondicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');




}

CondicionesIniciales();
