let cantidadTarjetas = 24;
function generarTablero(){
    //Funcion a generar todavía
    cargarIconos();
    //Vinculación de elementos de html con JS
    let tablero= document.getElementById("tablero");

    //Declaracion de tarjetas como variable local
    let tarjetas = [];
    //Hay que reiniciar también selecciones.
    selecciones=[];

    for(let i= 0; i < cantidadTarjetas; i++){
        tarjetas.push(
        `<div class = "area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                    <div class="cara trasera" id="trasera${i}">
                        ${iconos[0]}
                        </div>
                        <div class="cara superior">
                                <i class="fa-solid fa-question"></i>
                        </div>
            </div>
        </div>`
        );
        if(i%2==1){
            //splice: primer elemento yy cantidad de elementos que se han de eliminar
            iconos.splice(0,1)
        }
    }
    //DEsordenar las tarjetas
    tarjetas.sort(()=>Math.random()-0.5);

    //14 para insertar el codigo de las tarjetas en el tablero
    tablero.innerHTML= tarjetas.join("");

}
function cargarIconos(){
    //Iconos de texto extraidos de la fuente font awesome
    iconos = [
        '<i class="fa-solid fa-cake-candles"></i>',
        '<i class="fa-solid fa-clover"></i>',
        '<i class="fa-solid fa-leaf"></i>',
        '<i class="fa-solid fa-camera-retro"></i>',
        '<i class="fa-solid fa-calendar-days"></i>',
        '<i class="fa-solid fa-car"></i>',
        '<i class="fa-solid fa-carrot"></i>',
        '<i class="fa-solid fa-caravan"></i>',
        '<i class="fa-solid fa-file"></i>',
        '<i class="fa-solid fa-film"></i>',
        '<i class="fa-solid fa-fish"></i>',
        '<i class="fa-solid fa-fire"></i>',
    ]
}

//18 Función de seleccion de tarjeta
function seleccionarTarjeta(i){
    let tarjeta = document.getElementById("tarjeta"+i)
    
        if(selecciones.length==2){
            //hay que voltear las tarjetas
            deseleccionar(selecciones);
            selecciones = [];    

        }else if(tarjeta.style.transform != "rotateY(180deg)"){
            tarjeta.style.transform = "rotateY(180deg)";
            selecciones.push(i);
        }
}
function deseleccionar(selecciones){
    setTimeout(()=>{
        let tarjeta1 = document.getElementById("tarjeta"+selecciones[0]);
        let tarjeta2 = document.getElementById("tarjeta"+selecciones[1]);
        let trasera1 = document.getElementById("trasera"+selecciones[0]);
        let trasera2 = document.getElementById("trasera"+selecciones[1]);

        //Evaluación de las selecciones 
        if(trasera1.innerHTML != trasera2.innerHTML){
            tarjeta1.style.transform="rotateY(0deg)";
            tarjeta2.style.transform="rotateY(0deg)";
        }else{
            tarjeta1.style.background="plum";
            tarjeta2.style.background="plum";
        }
    },1000)
}