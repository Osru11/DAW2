class Hamburguesa{
    constructor(id,nombre,ingredientes,vegana,precio){
        this.id=id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.vegana = Boolean(vegana);
        this.precio=precio;
    }
    toString(){
        return this.nombre;
    }
}

class Bebida{
    constructor(id,nombre){
        this.id=id;
        this.nombre=nombre;
        this.precio=1.50;
    }
    toString(){
        return this.nombre;
    }
}

class Complemento{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    toString(){
        return this.nombre;
    }
}

class Postre{
    constructor(nombre,sabor,precio){
        this.nombre = nombre;
        this.sabor = sabor;
        this.precio = precio;
    }
    toString(){
        return this.nombre;
    }
}

const bebidas = [new Bebida("bebidas[0]","Sprite"),
new Bebida("bebidas[1]","Cocacola"),
new Bebida("bebidas[2]","Fanta"),
new Bebida("bebidas[3]","Acuarius"),
new Bebida("bebidas[4]","Nestea"),
new Bebida("bebidas[5]","Agua"),
new Bebida("bebidas[6]","CruzCampo")];

bebidas[5].precio=1.20;
bebidas[6].precio=1.00;

const hamburguesas = [
    new Hamburguesa("hamburguesas[0]","Gallega",["Carne de buey", "pan de cerveza negra", "queso San Simón", "lacón crujiente", "pimientos de Padrón","ajada"],false,15.50),
    new Hamburguesa("hamburguesas[1]","Bump Green",["remolacha","quinoa"],true,7.50),
    new Hamburguesa("hamburguesas[2]","Clasica",["ternera","huevo","pepinillos","cebolla","tomate","queso"],false,10.50)
];

const postres = [new Postre("Helado","chocolate",2.50),
new Postre("Helado","nata",2.00),
new Postre("Batido","vainilla",2.50),
new Postre("Batido","arandanos",3.00),
new Postre("Tarta","queso",2.25),
new Postre("Tarta","chocolate",1.90)];

const complementos = [new Complemento("Patatas",1.80),
new Complemento("Nuggets", 3.20)];
var ticket =[];
function mostrarProducto(){
    var elementoactivo = document.getElementById("select");
    switch (elementoactivo.value) {
        case "hamburguesa":
            mostrarMenu(hamburguesas);
            break;
        case "bebida":
            mostrarMenu(bebidas);
            break;
        case "complementos":
            mostrarMenu(complementos);
            break;
        case "postre":
            mostrarMenu(postres);
            break;
        default:
            break;
    }
}

function generaTicket(){
    let totalPagar = ticket.reduce((accumulator, currentValue) => accumulator + currentValue.precio, 0); ;
    let elementototal = document.getElementById("precioTotal");
    if(ticket != ""){
        elementototal.textContent = "Precio total: " + totalPagar;
    }else{
        elementototal.textContent = "Precio total: " + 0;
    }
    
}
function mostrarMenu(arrays){
    var texto = document.getElementById("opciones");
    var parametros = Object.getOwnPropertyNames(arrays[0]);
    
    texto.innerHTML="";
    texto.innerHTML += "<ul>"
    parametros.forEach((j) => {
            if(j != undefined && j != "id"){
            texto.innerHTML += "<strong>| "+j.toUpperCase()+" |</strong>";
            }
    });
    texto.innerHTML += "<br/><br/>";

    arrays.forEach((t) => {
        let Cadena="";
        parametros.forEach((j) => {
            if(j == "vegana"){
                if(t[j]==true){
                    Cadena +=" SÍ ";
                }else{
                    Cadena +=" NO ";
                }
                

            }else if(j == "precio"){
                Cadena +=" --> "+t[j]+" ";

            }else if(j != undefined && j != "id"){
                Cadena +=t[j]+" ";
            }
            
            
        });
        Cadena +='<button  onclick="anadirProducto('+t.id+')"> + </button> <a id="count'+t.id+'" style="color:DodgerBlue;"></a> ';
        Cadena +='<button  onclick="suprimirProducto('+t.id+')"> - </button>';
        texto.innerHTML +="<li>"+Cadena+"</li>";
    });
    texto.innerHTML += "</ul>"
}
function anadirProducto(producto){
    let texto = document.getElementById("count"+producto.id);
    texto.innerHTML++;
    ticket.push(producto);
}
function suprimirProducto(producto){
    let posicion=ticket.lastIndexOf(producto);
    let texto = document.getElementById("count"+producto.id);
    if (posicion!=-1 && texto.innerHTML>=1 ){
        ticket.splice(posicion, 1);
        texto.innerHTML--;
    }
   
}