class alimento{
    constructor(id,nombre,precio){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=0;
    }
    mostrarParametros(){
        return this.nombre+" --> "+this.precio+"€ ";
    }
    mostrarCabecera(){
        return "<strong>| NOMBRE | PRECIO |</strong>";
    }
}

class Hamburguesa extends alimento{
    constructor(id,nombre,ingredientes,vegana,cantidad,precio){
        super(id,nombre,cantidad,precio);
        this.ingredientes = ingredientes;
        this.vegana = Boolean(vegana);
    }
    mostrarParametros(){
        return this.nombre+": "+this.ingredientes+" --> "+this.precio+"€ ";
    }
    mostrarCabecera(){
        return "<strong>| NOMBRE | INGREDIENTES | PRECIO |</strong>";
    }
}

class Bebida extends alimento{
    constructor(id,nombre,cantidad){
        super(id,nombre,cantidad);
        this.precio=1.50;
    }
}

class Complemento extends alimento{
    constructor(id,nombre,cantidad,precio){
        super(id,nombre,cantidad,precio);
    }
}

class Postre extends alimento{
    constructor(id,nombre,sabor,cantidad,precio){
        super(id,nombre,cantidad,precio);
        this.sabor = sabor;
    }
    mostrarParametros(){
        return this.nombre+" "+this.sabor+" --> "+this.precio+"€ ";
    }
    mostrarCabecera(){
        return "<strong>| NOMBRE | SABOR | PRECIO |</strong>";
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

const postres = [new Postre("postres[0]","Helado","chocolate",2.50),
new Postre("postres[1]","Helado","nata",2.00),
new Postre("postres[2]","Batido","vainilla",2.50),
new Postre("postres[3]","Batido","arandanos",3.00),
new Postre("postres[4]","Tarta","queso",2.25),
new Postre("postres[5]","Tarta","chocolate",1.90)];

const complementos = [new Complemento("complementos[0]","Patatas",1.80),
new Complemento("complementos[1]","Nuggets", 3.20)];
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
    //Borro el texto anterior
    texto.innerHTML = "";

    //Creo la cabecera
    texto.innerHTML += "<ul>"
    texto.innerHTML +=arrays[0].mostrarCabecera();
    texto.innerHTML += "<br/><br/>";

    //Recorro cada uno de los elementos del array para mostrar los distintos tipos de 
    //haburguesas, bebidas, complementos o postres diferentes.

    arrays.forEach((alimento) => {
        let Cadena="";
        Cadena += alimento.mostrarParametros();
        Cadena +='<button  onclick="anadirProducto('+alimento.id+')"> + </button> <a id="count'+alimento.id+'" style="color:DodgerBlue;">'+alimento.cantidad+'</a> ';
        Cadena +='<button  onclick="suprimirProducto('+alimento.id+')"> - </button>';
        texto.innerHTML +="<li>"+Cadena+"</li>";
    });
    texto.innerHTML += "</ul>"
}
function anadirProducto(producto){
    let texto = document.getElementById("count"+producto.id);
    producto.cantidad++;
    texto.innerHTML=producto.cantidad;
    ticket.push(producto);
}
function suprimirProducto(producto){
    let posicion=ticket.lastIndexOf(producto);
    let texto = document.getElementById("count"+producto.id);
    if (posicion!=-1 && texto.innerHTML>=1){
        ticket.splice(posicion, 1);
        producto.cantidad--;
        texto.innerHTML=producto.cantidad;
    }
   
}