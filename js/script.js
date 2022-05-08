const ingreseTexto = document.querySelector('.ingreseTexto');
const resultado = document.querySelector('.resultado');
const buscador = document.querySelector('.buscador');
const sinMensaje = document.querySelector('.sinMensaje');
const sinMensaje2 = document.querySelector('.sinMensaje2');
const botonEncriptar = document.querySelector(".botonEncriptar");
const botonDesencriptar = document.querySelector(".botonDesencriptar");
const botonCopiar = document.querySelector(".botonCopiar");
const infoTexto = document.querySelector(".infoTexto");

function ocultarImagen(){
    resultado.style.display ='inline-block';
    botonCopiar.style.display ='inline-block';
    buscador.style.display = "none";
    sinMensaje.style.display = "none";
    sinMensaje2.style.display = "none";
}
function reaparecerImagen(){
    resultado.style.display ='none';
    botonCopiar.style.display ='none';
    buscador.style.display = "block";
    sinMensaje.style.display = "block";
    sinMensaje2.style.display = "block";
}

function encriptar(texto){
    let arregloCodigo = [['e', 'enter'],['i', 'imes'],['a','ai'],['o', 'ober'],['u','ufat']];
    for(let i = 0; i<arregloCodigo.length; i++){
        if(texto.includes(arregloCodigo[i][0])){
            texto=texto.replaceAll(arregloCodigo[i][0],arregloCodigo[i][1]);
        }
    }
    ocultarImagen();
    return texto;
}
function btnEncriptar(){
    const textoEncriptado = encriptar(ingreseTexto.value);
    resultado.value = textoEncriptado;
}

function desencriptar(texto){
    let arregloCodigo2 = [['enter', 'e'],['imes', 'i'],['ai','a'],['ober', 'o'],['ufat','u']];
    for(let i = 0; i<arregloCodigo2.length; i++){
        if(texto.includes(arregloCodigo2[i][0])){
            texto=texto.replaceAll(arregloCodigo2[i][0],arregloCodigo2[i][1]);
        }
    }
    ocultarImagen();
    return texto;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(ingreseTexto.value);
    resultado.value = textoEncriptado;
}

function copy() {
    let copyText = document.querySelector(".resultado");
    copyText.select();
    document.execCommand("copy");
    reaparecerImagen();
    ingreseTexto.value='';
    botonEncriptar.disabled=true;
    botonDesencriptar.disabled=true;

}

    
function esValido(c) {
    c = c.charCodeAt(0);
    return (c >= 97 && c <= 122) || (c == 32) || (c==44) ||(c==46) || (c==241);
}
    
function validarEntrada(cadena) {
    for (var i = 0; i < cadena.length; i++) {
    if (!esValido(cadena[i])) {
        break;
        }
    }
    return i == cadena.length;
}

    
function validarTextarea(elem) {
    var txt = elem.value;
    if (!validarEntrada(txt)||ingreseTexto.value=="") {
    elem.classList.add('invalido');
    infoTexto.style.color ="red";
    botonEncriptar.disabled=true;
    botonDesencriptar.disabled=true;
    } else {
    elem.classList.remove('invalido');
    botonEncriptar.disabled=false;
    infoTexto.style.color ="#495057";
    botonDesencriptar.disabled=false;
    
    }
}
