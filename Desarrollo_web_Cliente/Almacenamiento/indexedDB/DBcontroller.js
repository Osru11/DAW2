var db;

function initDB(){
	var solicitud = indexedDB.open("Contactos");

	solicitud.addEventListener("error", mostrarError);
	solicitud.addEventListener("success", comenzar);
	solicitud.addEventListener("upgradeneeded", crearAlmacen);
}

window.addEventListener("load", initDB);

function mostrarError(evento){
	alert("Tenemos un error: " + evento.code + " : " + evento.message);
}

function comenzar(evento){
	db = evento.target.result;
	console.log("funcion comenzar");

	mostrar();
}

function crearAlmacen(evento){
	var baseDatos = evento.target.result;
	var almacen = baseDatos.createObjectStore("Contactos", {keyPath: "id"});
	almacen.createIndex("buscarNombre", "nombre", {unique: false});

	console.log("funcion crear almacén");
}

let btnGuardar = document.querySelector("#btn_Guardar");

function almacenarContacto(){
	var N = document.querySelector("#nombre").value;
	var I = document.querySelector("#id").value;
	var E = document.querySelector("#edad").value;

	let transaccion = db.transaction(["Contactos"], "readwrite");
	let almacen = transaccion.objectStore("Contactos");

	almacen.add({
		nombre: N,
		id: I,
		edad: E
	});	

	N = "";
	I = "";
	E = "";
}

let cajaContactos;
cajaContactos = document.getElementById("muestra");

function mostrar(){
	cajaContactos.innerHTML="";

	let transaccion = db.transaction(["Contactos"]);
	let almacen = transaccion.objectStore("Contactos");

	let puntero = almacen.openCursor();
	puntero.addEventListener("success", mostrarContactos);
}

function mostrarContactos(evento){
	let puntero = evento.target.result;
	if(puntero){
		cajaContactos.innerHTML += "<div>" + 
		puntero.value.nombre + " / " + 
		puntero.value.id + " / " + 
		puntero.value.edad + 
		" <input type='button' class='btn_editar' value='Editar' onclick='seleccionarContacto(\"" + 
		puntero.value.id + "\")'>" + 
		"</div>";
		puntero.continue();
	}
}

function seleccionarContacto(key){
	let transaccion = db.transaction(["Contactos"], "readwrite");
	let almacen = transaccion.objectStore("Contactos");

	let solicitud = almacen.get(key);
	solicitud.addEventListener("success",
		function(){
			document.querySelector("#nombre").value = solicitud.result.nombre;
			document.querySelector("#id").value = solicitud.result.id;
			document.querySelector("#edad").value = solicitud.result.edad;
		}
	);

	let padreBoton = document.querySelector(".padre_boton");
	padreBoton.innerHTML = "<input type='button' class='btn_Actualizar' value='Actualizar'" + 
	" onclick='actualizarContacto()'>";
}

function actualizarContacto(){
	var N = document.querySelector("#nombre").value;
	var I = document.querySelector("#id").value;
	var E = document.querySelector("#edad").value;

	let transaccion = db.transaction(["Contactos"], "readwrite");
	let almacen = transaccion.objectStore("Contactos");

	almacen.put({
		nombre: N,
		id: I,
		edad: E
	});

	N = "";
	I = "";
	E = "";

	let padreBoton = document.querySelector(".padre_boton");
	padreBoton.innerHTML = "<input type='button' class='btn_Guardar' value='Guardar'" + 
	" onclick='almacenarContacto()'>";
}