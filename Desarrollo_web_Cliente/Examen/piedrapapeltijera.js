var seleccion= "";
if(localStorage.partidasGanadas==undefined||isNaN(localStorage.partidasGanadas)){
    localStorage.partidasGanadas=0;
}
if(localStorage.partidasTotales==undefined||isNaN(localStorage.partidasTotales)){
    localStorage.partidasTotales=1;
}
var partidasGanadas;
var partidasTotales;
var winRate;


function elegirOpcion(eleccion){
    let resultado= document.getElementById('resultado');
    let partida= document.getElementById('partida');
    seleccion = document.getElementById("seleccion");

    //Jugadas de ambos
    jugadaJugador= eleccion;
    let jugadaPc = crearJugadaPc();

    //Edito el Html para que no admita mas opciones del usuario
    seleccion.innerHTML="Piedra <button disabled>Elige</button><br><br>"+
    "Papel  <button disabled>Elige</button><br><br>"+
    "Tijera <button disabled>Elige</button>";

    //Que pasa en cada caso
    if(jugadaPc==jugadaJugador){
        resultado.innerHTML="Empate técnico";

    }else if(jugadaJugador=='piedra'){
        if(jugadaPc=='tijera'){
            resultado.innerHTML="Jeje jeje Ganaste";
        }else{
            resultado.innerHTML="Wuac, wuac...perdiste.";
        }
    }else if(jugadaJugador=='papel'){
        if(jugadaPc=='piedra'){
            resultado.innerHTML="Jeje jeje Ganaste";
        }else{
            resultado.innerHTML="Wuac, wuac...perdiste.";
        }
    }else if(jugadaJugador=='tijera'){
        if(jugadaPc=='papel'){
            resultado.innerHTML="Jeje jeje Ganaste";
        }else{
            resultado.innerHTML="Wuac, wuac...perdiste.";
        }

    }


    //Mostrar jugadas y winRate
    if(resultado.innerHTML=="Jeje jeje Ganaste"){
        partidasGanadas = parseInt(localStorage.partidasGanadas);
        partidasGanadas++;
        localStorage.partidasGanadas = partidasGanadas;
    }
    winRate= parseFloat(localStorage.partidasGanadas/localStorage.partidasTotales).toFixed(2);
    if (winRate == Infinity){
        winRate=parseFloat(0).toFixed(2);
    }

    //veo los valores del localstorage
    console.log("Total: "+localStorage.partidasTotales);
    console.log("Ganadas: "+localStorage.partidasGanadas);
    
    partida.innerHTML= jugadaPc + " vs " + jugadaJugador+"<br><br>El winrate es de : "+winRate;
    
    //recargamos la página
    CargaPag();
}

function crearJugadaPc(){
    let rand= Math.floor(Math.random() * (3 - 0));
    let jugadas = ['piedra','papel','tijera']
    let seleccionPc = jugadas[rand];
    return seleccionPc;
}
function CargaPag(){
    cuentaAtras();
}

var timer;
var number;

function cuentaAtras(){
    number = 3;
    timer = setInterval(countdown3,1000);
       
}

function countdown3(){
    var temporizador = document.getElementById('temporizador');
    number--;
    temporizador.innerHTML= "Siguiente ronda en : "+ number+" segundos.";

    if(number==0){
        clearInterval(timer);
        ResetGame();
    }

}


function ResetGame(){
    //reseteo de los botones
    seleccion = document.getElementById("seleccion");
    seleccion.innerHTML="Piedra <button onclick='elegirOpcion(\"piedra\")'>Elige</button><br><br>"+
    "Papel  <button onclick='elegirOpcion(\"papel\")'>Elige</button><br><br>"+
    "Tijera <button onclick='elegirOpcion(\"tijera\")'>Elige</button>";
    
    //añado contadores
    partidasTotales = parseInt(localStorage.partidasTotales);
    partidasTotales++;
    localStorage.partidasTotales = partidasTotales;

    //Quito el countdown
    var temporizador = document.getElementById('temporizador');
    temporizador.innerHTML= "";
}

