//Controla el select del html
let menuSelect = document.getElementById("menuSelection");


//Variables de todos los precios
var prSaladMixta1 = 2.95;
var prSaladMixta2 = prSaladMixta1*1.6;
var prSaladMixta3 = prSaladMixta1*2.2;
var prSaladElab1 = 4.50;
var prSaladElab2 = prSaladElab1*1.6;
var prSaladElab3 = prSaladElab1*2.2;
var prNugs6 = 3.50;
var prNugs12 = prNugs6*1.8;
var prCf6 = 5.20;
var prCf12 = prCf6*1.8;
var prBurguerDf = 4.75;
var prCheeseBurguer = 5;
var prBurguerDouble = 7.20;
var prVeggyBurguer1Normal = 5.75;
var prVeggyBurguer1Big = prVeggyBurguer1Normal*1.6;
var prVeggyBurguer2Normal = 6;
var prVeggyBurguer2Big = prVeggyBurguer2Normal*1.6;
var prFriesSmall = 0.85;
var prFriesMedium = prFriesSmall*1.4;
var prFriesBig = prFriesSmall*2;
var prBonSmall = 1.10;
var prBonMedium = prBonSmall*1.4;
var prBonBig = prBonSmall*2;
var prChoco = 2.8;
var prApple = 1.2;
var prSlush = 3.85;
var prWater = 1;
var prAquarius = 1.60;
var prPepsi = 1.30;


class Ensaladas {

    ings = "Ensalada mixta: Lechuga, tomate, maíz y zanahoria.\nEnsalada elaborada: Lechuga, tomate, maíz, zanahoria, aceitunas y atún."
    id = "";
    precio = 0;
    value = 0;
    show = "";

    constructor(id, precio, value, show) {
        this.id = id;
        this.precio = precio;
        this.value = value;
        this.show = show;
    }

    //Getters de las variables que se piden en otras partes del código
    get show() {
        return this.show;
    }

    get ings() {
        return this.ings;
    }

}


class Nuggets {

    ings =  "Nuggets de pollo: Rebozados en harina y pan rallado, ketchup, y fritos en aceite de cacahuete.\nChicken fingers: Rebozados en copos de trigo y avena, ketchup, y fritos en aceite de girasol.";
    id = "";
    precio = 0;
    value = 0;
    show = "";

    constructor(id, precio, value, show) {
        this.id = id;
        this.precio = precio;
        this.value = value;
        this.show = show;
    }

     //Getters de las variables que se piden en otras partes del código
    get show() {
        return this.show;
    }

    get ings() {
        return this.ings;
    }
}

//Esta clase recoge tanto las hamburguesas normales como las vegetarianas
class Burguers {

    ings = "Hamburguesa de ternera: Carne de vacuno, lechuga, tomate, pepinillos, mostaza y ketchup.\nCheeseburguer: Carne de vacuno, tomate, pepinillos, queso gouda y ketchup.\nHamburguesa doble de ternera: Carne de vacuno X2, lechuga, tomate, pepinillos, cebolla, mostaza y ketchup.";
    //Los ingredientes de las hamburguesas vegetales
    veggyIngs = "Hamburguesa de remolacha: Remolacha, zanahoria, algas, pimienta negra, cebolla roja y sésamo.\nHamburguesa de 'carne': Boniato, cúrcuma, gengibre, cebolla roja, pimentón, almendras y sésamo.";
    id = "";
    precio = 0;
    value = 0;
    show = "";

    constructor(id, precio, size, show) {
        this.id = id;
        this.precio = precio;
        this.size = size;
        this.show = show;
    }

     //Getters de las variables que se piden en otras partes del código
    get show() {
        return this.show;
    }

    get ings() {
        return this.ings;
    }

    get veggyIngs() {
        return this.veggyIngs;
    }
}


class Frituras {

    ings = "Patatas fritas: Fritas en aceite de girasol. \nBoniatos fritos: Fritos en aceite de cacahuete.";
    id = "";
    precio = 0;
    value = 0;
    show = "";

    constructor(id, precio, size, show) {
        this.id = id;
        this.precio = precio;
        this.size = size;
        this.show = show;
    }

     //Getters de las variables que se piden en otras partes del código
    get show() {
        return this.show;
    }

    get ings() {
        return this.ings;
    }
}


class Postres {

    id = "";
    precio = 0;
    value = 0;
    show = "";

    constructor(id, precio, size, show) {
        this.id = id;
        this.precio = precio;
        this.size = size;
        this.show = show;
    }

     //Getters de las variables que se piden en otras partes del código
    get show() {
        return this.show;
    }
}

class Bebidas {

    id = "";
    precio = 0;
    value = 0;
    show = "";

    constructor(id, precio, size, show) {
        this.id = id;
        this.precio = precio;
        this.size = size;
        this.show = show;
    }

    //Getters de las variables que se piden en otras partes del código
    get show() {
        return this.show;
    }
}

//Se muestra la carta por defecto, el menú vegetariano y sus hamburguesas están ocultas

document.getElementById("carta").hidden = false;
document.getElementById("menuVege").hidden = true;
document.getElementById("veggieFood").hidden = true;

//Las filas ocultas por defectos de cada tipo de producto
document.getElementById("salads").hidden = true;
document.getElementById("salads2").hidden = true;

document.getElementById("nuggies").hidden = true;
document.getElementById("chickenFingers").hidden = true;

document.getElementById('dayBurguers').hidden = false;
document.getElementById('burguers').hidden = true;

document.getElementById('veggyBurguers').hidden = true;
document.getElementById('veggyBurguers2').hidden = true;

document.getElementById('fries').hidden = true;
document.getElementById('fries2').hidden = true;
document.getElementById('desserts').hidden = true;
document.getElementById('drinks').hidden = true;

//La carta y las hamburguesas que se muestran dependiendo de la opción del select
function menuSelected() {
    switch (menuSelect.value) {
    case "vegetariano":
        document.getElementById("nuggetsShower").hidden = true;
        document.getElementById("dayBurguers").hidden = true;
        document.getElementById("veggieFood").hidden = false;

        document.getElementById("carta").hidden = true;
        document.getElementById("menuVege").hidden = false;

        document.getElementById("menuVege").style = "background-color: lightgreen;";
        break;

    default:
        document.getElementById("nuggetsShower").hidden = false;
        document.getElementById("dayBurguers").hidden = false;
        document.getElementById("veggieFood").hidden = true;

        document.getElementById("carta").hidden = false;
        document.getElementById("menuVege").hidden = true;

        document.getElementById("menuVege").style = "background-color: bisque;";
        break;
    }

}

//Objetos ya vacíos para igualarlos al objeto que se tenga que vaciar cada vez que se vuelven a ocultar las filas del producto
let noSalad = new Ensaladas("", 0, 0, "");
let noNugs = new Nuggets("", 0, 0, "");
let noBurguer = new Burguers("", 0, 0, "");
let noFries = new Frituras("", 0, 0, "");
let noDessert = new Postres("", 0, 0, "");
let noDrinks = new Bebidas("", 0, 0, "");

//Controla que se muestra y que no dependiendo de los checkbox, los input:number vuelven a cero y los objetos se vacían
function foodShown(id, checked) {
    switch(id) {
        case 'cbSalad':
            if(checked) {
                document.getElementById('salads').hidden = false;
                document.getElementById('salads2').hidden = false;
            } else {
                document.getElementById('salads').hidden = true;
                document.getElementById('salads2').hidden = true;

                document.getElementById("salad1").value = 0;
                document.getElementById("salad2").value = 0;
                document.getElementById("salad3").value = 0;
                document.getElementById("salad21").value = 0;
                document.getElementById("salad22").value = 0;
                document.getElementById("salad23").value = 0;

                salad = noSalad;
                salad2 = noSalad;
                salad3 = noSalad;
                salad21 = noSalad;
                salad22 = noSalad;
                salad23 = noSalad;
            }
        break;

        case 'cbNugs':
            if(checked) {
                document.getElementById('nuggies').hidden = false;
                document.getElementById('chickenFingers').hidden = false;
            } else {
                document.getElementById('nuggies').hidden = true;
                document.getElementById('chickenFingers').hidden = true;

                document.getElementById("nugs6").value = 0;
                document.getElementById("nugs12").value = 0;
                document.getElementById("cf6").value = 0;
                document.getElementById("cf12").value = 0;

                nugs6 = noNugs;
                nugs12 = noNugs;
                cf6 = noNugs;
                cf12 = noNugs;

            }
            break;

            case 'cbBurguers':
                if(checked) {
                    document.getElementById('burguers').hidden = false;
                } else {
                    document.getElementById('burguers').hidden = true;

                    document.getElementById("defaultBurguer").value = 0;
                    document.getElementById("cheeseBurguer").value = 0;
                    document.getElementById("doubleBurguer").value = 0;

                    defectoBurguer = noBurguer;
                    quesoBurguer = noBurguer;
                    dobleBurguer = noBurguer;
                }
                break;

        case 'cbVeggyBurguers':
            if(checked) {
                document.getElementById('veggyBurguers').hidden = false;
                document.getElementById('veggyBurguers2').hidden = false;
            } else {
                document.getElementById('veggyBurguers').hidden = true;
                document.getElementById('veggyBurguers2').hidden = true;

                document.getElementById("veggyNormal").value = 0;
                document.getElementById("veggyBig").value = 0;
                document.getElementById("veggy2Normal").value = 0;
                document.getElementById("veggy2Big").value = 0;

                remolachaBurguerNormal = noBurguer;
                remolachaBurguerGrande = noBurguer;
                boniatoBurguerNormal = noBurguer;
                boniatoBurguerGrande = noBurguer;
            }
            break;

        case 'cbFries':
            if(checked) {
                document.getElementById('fries').hidden = false;
                document.getElementById('fries2').hidden = false;
            } else {
                document.getElementById('fries').hidden = true;
                document.getElementById('fries2').hidden = true;

                document.getElementById("friesSmall").value = 0;
                document.getElementById("friesMedium").value = 0;
                document.getElementById("friesBig").value = 0;

                document.getElementById("fries2Small").value = 0;
                document.getElementById("fries2Medium").value = 0;
                document.getElementById("fries2Big").value = 0;

                smallFries = noFries;
                smallBon = noFries;
                mediumFries = noFries;
                mediumBon = noFries;
                bigFries = noFries;
                bigBon = noFries;

            }
            break;

        case 'cbDesserts':
            if(checked) {
                document.getElementById('desserts').hidden = false;
            } else {
                document.getElementById('desserts').hidden = true;

                document.getElementById("choco").value = 0;
                document.getElementById("apple").value = 0;
                document.getElementById("slush").value = 0;

                iceCream = noDessert;
                manzana = noDessert;
                granizado = noDessert;
            }
            break;

        case 'cbDrinks':
            if(checked) {
                document.getElementById('drinks').hidden = false;
            } else {
                document.getElementById('drinks').hidden = true;

                document.getElementById("water").value = 0;
                document.getElementById("aquarius").value = 0;
                document.getElementById("pepsi").value = 0;

                agua = noDrinks;
                aquarius = noDrinks;
                pepsi = noDrinks;
            }
            break;
    }
}

//Se inicializa un objeto de cada variedad de ensalada
let salad = new Ensaladas("", 0, 0, "");
let salad2 = new Ensaladas("", 0, 0, "");
let salad3 = new Ensaladas("", 0, 0, "");
let salad21 = new Ensaladas("", 0, 0, "");
let salad22 = new Ensaladas("", 0, 0, "");
let salad23 = new Ensaladas("", 0, 0, "");

//Lo que se mostrará al usuario cuando pulsen mostrar pedido
let size = "";
let show = "";

//Controla qué y cuántas ensaladas se han seleccionado
function saladSelector(value, id) {

    switch (id) {
        case "salad1":
            if(value>0) {
                size = "para 1";
                show = "Ensalada mixta " + size + " x" + value + "_______" + (prSaladMixta1*value).toFixed(2) + "€\n";
                salad = new Ensaladas(id, (prSaladMixta1*value), value, show);
            } else {
                salad = new Ensaladas("", 0, 0, "");
            }
            break;

        case "salad2":
            if(value>0) {
                size = "para 2";
                show = "Ensalada mixta " + size + " x" + value + "_______" + (prSaladMixta2*value).toFixed(2) + "€\n";
                salad2 = new Ensaladas(id, (prSaladMixta2*value), value, show);
            } else {
                salad2 = new Ensaladas("", 0, 0, "");
            }
            break;

        case "salad3":
            if(value>0) {
                size = "para 3";
                show = "Ensalada mixta " + size + " x" + value + "_______" + (prSaladMixta3*value).toFixed(2) + "€\n";
                salad3 = new Ensaladas(id, (prSaladMixta3*value), value, show);
            } else {
                salad3 = new Ensaladas("", 0, 0, "");
            }
            break;

        case "salad21":
            if(value>0) {
                size = "para 1";
                show = "Ensalada elaborada " + size + " x" + value + "_______" + (prSaladElab1*value).toFixed(2) + "€\n";
                salad21 = new Ensaladas(id, (prSaladElab1*value), value, show);
            } else {
                salad21 = new Ensaladas("", 0, 0, "");
            }
            break;

        case "salad22":
            if(value>0) {
                size = "para 2";
                show = "Ensalada elaborada " + size + " x" + value + "_______" + (prSaladElab2*value).toFixed(2) + "€\n";
                salad22 = new Ensaladas(id, (prSaladElab2*value), value, show);
            } else {
                salad22 = new Ensaladas("", 0, 0, "");
            }
            break;

        case "salad23":
            if(value>0) {
                size = "para 3";
                show = "Ensalada elaborada " + size + " x" + value + "_______" + (prSaladElab3*value).toFixed(2) + "€\n";
                salad23 = new Ensaladas(id, (prSaladElab3*value), value, show);
            } else {
                salad23 = new Ensaladas("", 0, 0, "");
            }
            break;
    }
}

//Se inicializa un objeto de cada variedad de nugget
let nugs6 = new Nuggets("", 0, 0, "");
let nugs12 = new Nuggets("", 0, 0, "");
let cf6 = new Nuggets("", 0, 0, "");
let cf12 = new Nuggets("", 0, 0, "");

//Controla qué y cuántos nuggets se han seleccionado
function selectNuggets(value, id) {

    switch(id) {
        case "nugs6":
            if(value>0) {
                size = "(6 uds.)";
                show = "Nuggets " + size + " x" + value + "_______" + (prNugs6*value).toFixed(2) + "€\n";
                nugs6 = new Nuggets(id, (prNugs6*value), value, show);
            } else {
                nugs6 = new Nuggets("", 0, 0, "");
            }
            break;

        case "nugs12":
            if(value>0) {
                size = "(12 uds.)";
                show = "Nuggets " + size + " x" + value + "_______" + (prNugs12*value).toFixed(2) + "€\n";
                nugs12 = new Nuggets(id, (prNugs12*value), value, show);
            } else {
                nugs12 = new Nuggets("", 0, 0, "");
            }
            break;

        case "cf6":
            if(value>0) {
                size = "(6 uds.)";
                show = "Chicken fingers " + size + " x" + value + "_______" + (prCf6*value).toFixed(2) + "€\n";
                cf6 = new Nuggets(id, (prCf6*value), value, show);
            } else {
                cf6 = new Nuggets("", 0, 0, "");
            }
            break;

        case "cf12":
            if(value>0) {
                size = "(12 uds.)";
                show = "Chicken fingers " + size + " x" + value + "_______" + (prCf12*value).toFixed(2) + "€\n";
                cf12 = new Nuggets(id, (prCf12*value), value, show);
            } else {
                cf12 = new Nuggets("", 0, 0, "");
            }
            break;
    }
}

//Se inicializa un objeto de cada variedad de hamburguesa
let defectoBurguer = new Burguers("", 0, 0, "");
let quesoBurguer = new Burguers("", 0, 0, "");
let dobleBurguer = new Burguers("", 0, 0, "");

//Controla qué y cuántas hamburguesas se han seleccionado
function selectBurguer(value, id) {
    switch(id) {

        case "defaultBurguer":
            if(value>0) {
                size = "(6 uds.)";
                show = "Nuggets " + size + " x" + value + "_______" + (prBurguerDf*value).toFixed(2) + "€\n";
                defectoBurguer = new Burguers(id, (prBurguerDf*value), value, show);
            } else {
                defectoBurguer = new Burguers("", 0, 0, "");
            }
            break;

        case "cheeseBurguer":
            if(value>0) {
                show = "Cheeseburguer " + " x" + value + "_______" + (prCheeseBurguer*value).toFixed(2) + "€\n";
                quesoBurguer = new Burguers(id, (prCheeseBurguer*value), value, show);
            } else {
                quesoBurguer = new Burguers("", 0, 0, "");
            }
            break;

        case "doubleBurguer":
            if(value>0) {
                size = "doble";
                show = "Hamburguesa de ternera " + size + " x" + value + "_______" + (prBurguerDouble*value).toFixed(2) + "€\n";
                dobleBurguer = new Burguers(id, (prBurguerDouble*value), value, show);
            } else {
                dobleBurguer = new Burguers("", 0, 0, "");
            }
            break;
    }
}


let remolachaBurguerNormal = new Burguers("", 0, 0, "");
let remolachaBurguerGrande = new Burguers("", 0, 0, "");
let boniatoBurguerNormal = new Burguers("", 0, 0, "");
let boniatoBurguerGrande = new Burguers("", 0, 0, "");

function selectVeggyBurguer(value, id) {
    switch(id) {
        case "veggyNormal":
            if(value>0) {
                size = "normal";
                show = "Hamburguesa de remolacha " + size + " x" + value + "_______" + (prVeggyBurguer1Normal*value).toFixed(2) + "€\n";
                remolachaBurguerNormal = new Nuggets(id, (prVeggyBurguer1Normal*value), value, show);
            } else {
                remolachaBurguerNormal = new Nuggets("", 0, 0, "");
            }
            break;

        case "veggyBig":
            if(value>0) {
                size = "grande";
                show = "Hamburguesa de remolacha " + size + " x" + value + "_______" + (prVeggyBurguer1Big*value).toFixed(2) + "€\n";
                remolachaBurguerGrande = new Nuggets(id, (prVeggyBurguer1Big*value), value, show);
            } else {
                remolachaBurguerGrande = new Nuggets("", 0, 0, "");
            }
            break;

        case "veggy2Normal":
            if(value>0) {
                size = "normal";
                show = "Hamburguesa de 'carne' " + size + " x" + value + "_______" + (prVeggyBurguer2Normal*value).toFixed(2) + "€\n";
                boniatoBurguerNormal = new Nuggets(id, (prVeggyBurguer2Normal*value), value, show);
            } else {
                boniatoBurguerNormal = new Nuggets("", 0, 0, "");
            }
            break;

        case "veggy2Big":
            if(value>0) {
                size = "grande";
                show = "Hamburguesa de 'carne " + size + " x" + value + "_______" + (prVeggyBurguer2Big*value).toFixed(2) + "€\n";
                boniatoBurguerGrande = new Nuggets(id, (prVeggyBurguer2Big*value), value, show);
            } else {
                boniatoBurguerGrande = new Nuggets("", 0, 0, "");
            }
            break;

    }
}

//Se inicializa un objeto de cada variedad de fritos
let smallFries = new Frituras("", 0, 0, "");
let mediumFries = new Frituras("", 0, 0, "");
let bigFries = new Frituras("", 0, 0, "");
let smallBon = new Frituras("", 0, 0, "");
let mediumBon = new Frituras("", 0, 0, "");
let bigBon = new Frituras("", 0, 0, "");

//Controla qué y cuántos fritos se han seleccionado
function selectFries(value, id) {
    switch(id) {
        case "friesSmall":
            if(value>0) {
                size = "(pequeño)";
                show = "Patatas fritas " + size + " x" + value + "_______" + (prFriesSmall*value).toFixed(2) + "€\n";
                smallFries = new Frituras(id, (prFriesSmall*value), value, show);
            } else {
                smallFries = new Frituras("", 0, 0, "");
            }
            break;

        case "friesMedium":
            if(value>0) {
                size = "(mediano)";
                show = "Patatas fritas " + size + " x" + value + "_______" + (prFriesMedium*value).toFixed(2) + "€\n";
                mediumFries = new Frituras(id, (prFriesMedium*value), value, show);
            } else {
                mediumFries = new Frituras("", 0, 0, "");
            }
            break;

        case "friesBig":
                if(value>0) {
                    size = "(grande)";
                    show = "Patatas fritas " + size + " x" + value + "_______" + (prFriesBig*value).toFixed(2) + "€\n";
                    bigFries = new Frituras(id, (prFriesBig*value), value, show);
                } else {
                    bigFries = new Frituras("", 0, 0, "");
                }
                break;

        case "fries2Small":
            if(value>0) {
                size = "(pequeño)";
                show = "Boniatos fritos " + size + " x" + value + "_______" + (prBonSmall*value).toFixed(2) + "€\n";
                smallBon = new Frituras(id, (prBonSmall*value), value, show);
            } else {
                smallBon = new Frituras("", 0, 0, "");
            }
            break;

            case "fries2Smedium":
                if(value>0) {
                    size = "(mediano)";
                    show = "Boniatos fritos " + size + " x" + value + "_______" + (prBonMedium*value).toFixed(2) + "€\n";
                    mediumBon = new Frituras(id, (prBonMedium*value), value, show);
                } else {
                    mediumBon = new Frituras("", 0, 0, "");
                }
                break;

            case "fries2Big":
                if(value>0) {
                    size = "(grande)";
                    show = "Boniatos fritos " + size + " x" + value + "_______" + (prBonBig*value).toFixed(2) + "€\n";
                    bigBon = new Frituras(id, (prBonBig*value), value, show);
                } else {
                    bigBon = new Frituras("", 0, 0, "");
                }
                break;
    }
}

//Se inicializa un objeto de cada variedad de postres
let iceCream = new Postres("", 0, 0, "");
let manzana = new Postres("", 0, 0, "");
let granizado = new Postres("", 0, 0, "");

//Controla qué y cuántos postres se han seleccionado
function selectDesserts(value, id) {
    switch (id) {
        case "choco":
            if(value>0) {
                show = "Helado de chocolate " + " x" + value + "_______" + (prChoco*value).toFixed(2) + "€\n";
                iceCream = new Postres(id, (prChoco*value), value, show);
            } else {
                iceCream = new Postres("", 0, 0, "");
            }
            break;

        case "apple":
            if(value>0) {
                show = "Manzana " + " x" + value + "_______" + (prApple*value).toFixed(2) + "€\n";
                manzana = new Postres(id, (prApple*value), value, show);
            } else {
                manzana = new Postres("", 0, 0, "");
            }
            break;

        case "slush":
            if(value>0) {
                show = "Granizado " + " x" + value + "_______" + (prSlush*value).toFixed(2) + "€\n";
                granizado = new Postres(id, (prSlush*value), value, show);
            } else {
                granizado = new Postres("", 0, 0, "");
            }
            break;

    }
}

//Se inicializa un objeto de cada variedad de bebida
let agua = new Bebidas("", 0, 0, "");
let aquarius = new Bebidas("", 0, 0, "");
let pepsi = new Bebidas("", 0, 0, "");

//Controla qué y cuántas bebidas se han seleccionado
function selectDrinks(value, id) {
    switch (id) {
        case "water":
            if(value>0) {
                show = "Agua " + " x" + value + "_______" + (prWater*value).toFixed(2) + "€\n";
                agua = new Bebidas(id, (prWater*value), value, show);
            } else {
                agua = new Bebidas("", 0, 0, "");
            }
            break;

        case "aquarius":
            if(value>0) {
                show = "Lata de Aquarius " + " x" + value + "_______" + (prAquarius*value).toFixed(2) + "€\n";
                aquarius = new Bebidas(id, (prAquarius*value), value, show);
            } else {
                aquarius = new Postres("", 0, 0, "");
            }
            break;

        case "pepsi":
            if(value>0) {
                show = "Lata de Pepsi " + " x" + value + "_______" + (prPepsi*value).toFixed(2) + "€\n";
                pepsi = new Postres(id, (prPepsi*value), value, show);
            } else {
                pepsi = new Postres("", 0, 0, "");
            }
            break;

    }
}

//Muestra los ingredientes, para no crear nuevos objetos se han usado los vacíos, ya que su variable ingredientes no cambia
function showIngs(id) {
    switch(id) {

        case "btnSalads":
            alert(noSalad.ings);
            break;

        case "btnNugs":
            alert(noNugs.ings);
            break;
        case "btnBurguers":
            alert(noBurguer.ings);
            break;

        case "btnVeggyFood":
            alert(noBurguer.veggyIngs);

            break;

        case "btnFriesOil":
            alert(noFries.ings);

            break;
    }

}

//Controla si el usuario ha seleccionado algún producto o no
let confirmationAbility = false;

//Muestra el pedido con todos los productos, todos los precios multiplicados por el número de veces que se ha pedido y el precio total
function showOrder() {
    let show = salad.show + salad2.show + salad3.show + salad21.show + salad22.show + salad23.show +
                nugs6.show + nugs12.show + cf6.show + cf12.show +
                defectoBurguer.show + quesoBurguer.show + dobleBurguer.show +
                remolachaBurguerNormal.show + remolachaBurguerGrande.show + boniatoBurguerNormal.show + boniatoBurguerGrande.show +
                smallFries.show + mediumFries.show + bigFries.show + smallBon.show + mediumBon.show + bigBon.show +
                iceCream.show + manzana.show + granizado.show +
                agua.show + aquarius.show + pepsi.show;

    let totalBill = (parseFloat(salad.precio) + parseFloat(salad2.precio) + parseFloat(salad3.precio) + parseFloat(salad21.precio) + parseFloat(salad22.precio) + parseFloat(salad23.precio) +
        parseFloat(nugs6.precio) + parseFloat(nugs12.precio) + parseFloat(cf6.precio) + parseFloat(cf12.precio) +
        parseFloat(defectoBurguer.precio) + parseFloat(quesoBurguer.precio) + parseFloat(dobleBurguer.precio) +
        parseFloat(remolachaBurguerNormal.precio) + parseFloat(remolachaBurguerGrande.precio) + parseFloat(boniatoBurguerNormal.precio) + parseFloat(boniatoBurguerGrande.precio) +
        parseFloat(smallFries.precio) + parseFloat(mediumFries.precio) + parseFloat(bigFries.precio) + parseFloat(smallBon.precio) + parseFloat(mediumBon.precio) + parseFloat(bigBon.precio) +
        parseFloat(iceCream.precio) + parseFloat(manzana.precio) + parseFloat(granizado.precio) +
        parseFloat(agua.precio) + parseFloat(aquarius.precio) + parseFloat(pepsi.precio));

    totalBill = totalBill.toFixed(2);

    if(totalBill <=0) {
        alert("No has seleccionado ningún producto.");
        confirmationAbility = false;
    } else {
        confirmationAbility = true;
        alert(show + "\n" +
                "_______________________________________" + "\n" +
                "Precio total: " + totalBill + "€");
    }

}

//Muestra el mensaje de pedido confirmado si hay productos, pero en verdad, no sirve para nada :)
function confirmOrder() {
    showOrder();
    if(confirmationAbility) {
        alert("Tu pedido ha sido enviado.\n"
                + "¡Gracias por confiar en nosotros y hasta pronto!");
    }
}

//Si mi tutora del año pasado viese este código, me quitaba la titulación de DAM