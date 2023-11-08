//vinculación de labels con objetos de JS
let lbl_info = document.getElementById("lbl_info");
let txt_box= document.getElementById("lbl_text_box");
let lbl_intentos= document.getElementById("lbl_intentos");
let lbl_random= document.getElementById("lbl_random");
let btn_Boton= document.getElementById("btn_Boton");
let btn_Shh= document.getElementById("btn_Shh");

//Declaración de variables e inizalización
let auxiliar = "";
let min = new Number(0);
let max = new Number(10);
let tries = new Number(3);
let answer = new Number(0);
let IsGameWon = new Boolean(false);
let randomNum = new Number(0);

let isRandomShow = false;

//Función genera random
function rndom_Calc(min,max){
    min = Math.ceil(min);//redondeo entero por arriba
    max = Math.floor(max);//redondeo entero por abajo
    var nuevoRandom = new Number(Math.floor(Math.random()*(max-min+1)+min));
    console.log(nuevoRandom);
    return nuevoRandom;
}


function CargaPag(){
    cuentaAtras();
    lbl_info.append("Introduce un número entre "+min+" y "+max);
    lbl_intentos.textContent= "Intentos: " + tries;
    randomNum = rndom_Calc(min,max);
    lbl_random.textContent = randomNum;
}
function btn_Boton_Click(){
    if(btn_Boton.innerText == "¿Nuevo Juego?")
        cuentaAtras();

    auxiliar = txt_box.value;
    lbl_info.textContent = "Intentalo de nuevo...";
    btn_Boton.innerText = "Intentar";
    answer = Number(auxiliar);

    if(auxiliar!=""&& tries>0){
        if(answer == randomNum){
            console.log("Correcto!");
            lbl_info.innerText = "¡ "+ auxiliar + " es correcto!";
            IsGameWon=true;
            ResetGame();
        }else if(answer>randomNum){
            console.log("Prueba más Bajo...");
            lbl_info.innerText = auxiliar + " es mayor. Prueba más bajo";
            txt_box.value= "";
            tries--;
            lbl_intentos.innerText = "Intentos: " + tries;

        }else{
            console.log("Prueba más alto...");
            lbl_info.innerText = auxiliar + " es menor. Prueba más alto";
            txt_box.value= "";
            tries--;
            lbl_intentos.innerText = "Intentos: " + tries;
        }
    }if (tries<=0){
        IsGameWon = false;
        ResetGame();
    }
}
function ResetGame(){
    btn_Boton.innerText = "¿Nuevo Juego?";
    txt_box.value = "";
    clearInterval(timer);
    temporizador.innerText = "Cuenta atrás: ";

    if(IsGameWon){
        lbl_info.innerText = "";
        randomNum = rndom_Calc(min, max);
        lbl_info.innerText = "¡GANASTE!"
        IsGameWon = false;
        tries = 3;
        lbl_intentos.innerText = "Intentos: " + tries;
    }else{
        lbl_info.innerText = "";
        randomNum = rndom_Calc(min, max);
        tries = 3;
        lbl_info.innerText = "Lastima. Prueba otra vez!"
        lbl_intentos.innerText = "Intentos: " + tries;
    }
    lbl_random.textContent = randomNum;
}
function btn_Shh_Click(){
    //Maneras de hacerlo
    //1. Usar un alert
    /*alert("el número que buscas es el "+ randomNum);*/

    //2.Ocultar elemento ponclick con propiedades de css
    if(lbl_random.style.display==="none")
        lbl_random.style.display = "block"
    else
        lbl_random.style.display = "none"

    //3. Cambiar el valor del letrero del botón
    /*if(!isRandomShow){
        btn_Shh.innerHTML = randomNum;
        isRandomShow = true;
    }else{
        btn_Shh.innerHTML = "Shh..."
        isRandomShow = false;
    }*/

}
let temporizador = document.getElementById("temporizador");
temporizador.innerText = "Cuenta atrás: ";


var timer;
var number;
function cuentaAtras(){
    number = 30;
    timer = setInterval(countdown30,1000);
       
}
function countdown30(){
    console.log(number);
    number--;
    temporizador.innerText= "Cuenta atrás: "+ number;

    if(number==0){
        clearInterval(timer);
        IsGameWon = false;
        ResetGame();
    }

}