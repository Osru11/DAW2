let btn_Guardar = document.getElementById("btn_Guardar");
let modificado = false;
btn_Guardar.addEventListener("click",almacenarContactos);
//1. Creamos una clase Persona
class Persona {
    constructor(nombre, id, edad, comida_favorita){
        this.nombre = nombre; //string
        this.id = id; //string
        this.edad = edad; //string
        this.comida_favorita  = comida_favorita;//string
    }
}

let coleccionPersonas = [];

//2. Función para pasar la información de form a una colección de personas
function almacenarContactosColeccion(){
    let name = document.getElementById("nombre").value;
    let kid = document.getElementById("id").value;
    let age = document.getElementById("edad").value;
    let fav_food = document.getElementById("comida_favorita").value;

    let auxPer = new Persona(name,kid,age,fav_food)
    name = "";
    kid = "";
    age = "";
    fav_food ="";
}

//código API docs pegado y modificado

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import{ getFirestore,
    setDoc,
    doc,
    collection,
    getDocs,
    deleteDoc,
    getDoc,
    updateDoc
}from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk0HdkX87vs9umSyKvo2OpyOOIec21lEA",
  authDomain: "contactosfirebasedb.firebaseapp.com",
  projectId: "contactosfirebasedb",
  storageBucket: "contactosfirebasedb.appspot.com",
  messagingSenderId: "67590285605",
  appId: "1:67590285605:web:7e4bec073fa25fab4a12cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Fin codigo copiado y modificado

var database = getFirestore(app);

importarDB();

//5 Insertar datos en nuestra bd
async function almacenarContactos(evento){
    let name = document.getElementById("nombre").value;
    let kid = document.getElementById("id").value;
    let age = document.getElementById("edad").value;
    let fav_food = document.getElementById("comida_favorita").value;
    let auxPer = new Persona(name,kid,age,fav_food)
    
    name = "";
    kid = "";
    age = "";
    fav_food ="";

    //estructura : Colección/ Sub-colección-Documentos/ Documentos-Elementos
    await setDoc(doc(database,'usuarios',auxPer.id),{
        nombre: auxPer.nombre,
        edad: auxPer.edad,
        comida: auxPer.comida_favorita
    });
}
async function importarDB(){
    let muestra = document.getElementById("muestra");
    muestra.innerHTML="";

    const querySnapshot = await getDocs(collection(database, "usuarios"));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());

        muestra.innerHTML+=`<div><h4>${doc.id}</h4>
                            <p>${doc.data().nombre}</p>
                            <p>${doc.data().edad}</p>
                            <p>${doc.data().comida}</p><br>

                            <input type="button" class"btn_Eliminar" value="Eliminar" id=el${doc.id}>
                            <input type="button" class"btn_Editar" value="Editar" id=ed${doc.id}>
                            </div>`;
    });
    var btnsEliminar= document.querySelectorAll(".btn_Eliminar");
    var btnsEditar= document.querySelectorAll(".btn_Editar");
}