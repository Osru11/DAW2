//vinculación de labels con objetos de JS
let lbl_info = document.getElementById("lbl_info");
let txt_box= document.getElementById("lbl_text_box");
let lbl_intentos= document.getElementById("lbl_intentos");
//let lbl_random= document.getElementById("lbl_random");
//let lbl_tb= document.getElementById("lbl_tb");
let btn_Boton= document.getElementById("btn_Boton");
//let btn_Shh= document.getElementById("btn_Shh");

//DEclaración de variables e inizalización
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
    lbl_info.append("Introduce un número entre "+min+" y "+max);
    lbl_intentos.textContent= "Intentos: " + tries;
    randomNum = rndom_Calc(min,max);
    //lbl_random.textContent = randomNum;
}
function btn_Boton_Click(){
    auxiliar = txt_box.value;
    lbl_info.textContent = "Intentalo de nuevo...";
    btn_Boton.innerText = "Pulsar";
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
}