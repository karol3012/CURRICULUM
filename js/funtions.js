//4 Formas de impresion
//alert("HOLA DESDE UN ARCHIVO EXTERNO");
//console.log("HOLA DESDE LA CONSOLA");
//document.write("HOLA DESDE LA INTERFAZ");
/*Swal.fire("HOLA DESDE SWETTALERT");*/
//Swal.fire({
//    title: "The Internet?",
//    text: "That thing is still around?",
//    icon: "error"
//  });

//VARIABLES Y TIPOS DE DATOS 
const pi = 3.14; //decimal
const pul = 2.54;
var name = "Karol Arevalo"; //string
let edad = 18; //entero
var ver = true; //boolean
let fal = false //boolean

//OPERADORES BASICOS
var suma = 5+2;
console.log(suma)
var var_uno = 10;
var var_dos = 5;
console.log(var_uno - var_dos);
console.log(var_uno * var_dos);
console.log(var_uno / var_dos);
console.log(var_uno % var_dos);

//OPERADORES DE COMPARACION
//= Asignacion
//== Comparacion(valor)
//=== Estrictamente comparado (valor y tipò de dato)
//>/ >= / <= / < / <>

console.log("Mi edads es = " + edad);

function load_page(){
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        showConfirmbutton: false,
        timer: 2000
      });
}

function send_form(){
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    if(name.length == 0 && last_name.length == 0){
        Swal.fire({
            title: "Cajas de texto vacias",
            Text: "Algunas de las cajas de texto se encuentra vacia",
            icon: error
          });
          if(name.length == 0){
            document.getElementById("name").style.border = "2px solid red"
          }
          else{
            document.getElementById("name").style.border = "2px solid green"
          }
          if(name.length == 0){
            document.getElementById("last_name").style.border = "2px solid red"
          }
          else{
            document.getElementById("last_name").style.border = "2px solid green"
          }
    }
    else{
        document.getElementById("print").innerText = "Su nombre es :<strong" + name +" "+ last_name;
    }

}



