// 4 formas de impresion
// alert("hola desde un archivo externo");
// console.log("hola desde la consola");
// document.write("hola desde la interfaz");
// Swal.fire(" hola desde SweetAlert2 ");
// Swal.fire({
    // title: "The Internet?",
    // text: "That thing is still around?",
    // icon: "error"
//   });

// variables y tipos de datos 
const pi  =3.14; //decimal
const pul = 2.54; 
var name  = "Karol"; //string
let edad  = 17; //entero
var ver = true; //boolean
let fal = false; //boolean 

//operadores basicos
var suma = 5+2
console.log (suma);
var var_uno =10;
var var_dos =5;
console.log(var_uno-var_dos);
console.log(var_uno*var_dos);
console.log(var_uno%var_dos);

//operadores de comparacion 
//= asignacion 
//== comparacion (valor) 
//=== estrictamente comparado (valor y tipo de dato)
//> />= / </ <=

console.log("mi edad es "+ edad);

function load_page(){
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        showConfirmButton:false,
       // imageHeight: 1500,
        imageAlt: "A tall image",
         timer: 2000
      });

      document.getElementById("text").innerText= "el array a calcular es: "+ array_num;
      document.getElementById("impresion").value=  array_num;
      document.getElementById("name_search").value= nombre_form;
      
      let hour_system= new Date();
      let dia= hour_system.getDay();
      console.log (hour_system.getDate());
      console.log (hour_system.getDay());
      console.log (hour_system.getFullYear());
      console.log (hour_system.getHours());
      console.log (hour_system.getMinutes());
      console.log (hour_system.getMonth());
      console.log(hour_system.getTime());
       let month=["enero", "febrero", "marzo ", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
       let dias= [ "domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
       console.log (dias);
       console.log(month);
       for(let i=0; i < dias.length; i++){
        console.log(dias [dia]);
       }
       let dia_mes = hour_system.getMonth()+1;
       console.log(hour_system.getDate()+"/"+ dia_mes+"/"+ hour_system.getFullYear());

      
      document.getElementById("hour_system").value= hour_system;
}


function send_form(){
    let name =document.getElementById("name").value;
    let last_name =document.getElementById("last_name").value;
    let pass_one =document.getElementById("pass_one").value;
    let pass_two =document.getElementById("pass_two").value;
   
    if(name.length == 0 || last_name.length==0 || pass_one.length==0||pass_two.length==0){
        Swal.fire({
            icon: "error",
            title: "cajas de texto vacia ",
            text: "alguna caja se encuentra vacia ",
          });
          if(name.length==0){
            document.getElementById("name").style.border="2px solid red";
          }else{
            document.getElementById("name").style.border="2px solid green";
          }
          if(last_name.length==0){
            document.getElementById("last_name").style.border="2px solid red";
          }else{
            document.getElementById("last_name").style.border="2px solid green";
          }

          
    }
    else if(pass_one != pass_two){
      Swal.fire({
        icon: "error",
        title: "sus contraseñas no son iguales  ",
        text: "por favor valide sus credenciales",
      });
    }
    else{
        document.getElementById("print").innerText= "su nombre es "+ name+ " "+ "y su apellido es " +last_name;
        
    }
}

//ARRAYS
var array_semana= ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var array_gral =[1, 2,, 3, 4, 5, "abd", "soy Karol "];
var array_num=[1, 2, 3, 4,  5, 6, 7, 8, 9];

var array_multi=[
{name: "Karol ", age: 32, color: "verde"},
{name: "Juan ", age: 33, color: "azul"},
{name: "Marlon  ", age: 3, color: "rojo"},
{name: "Merly", age: 2, color: "amarillo"}

];


var json_ejem={
  name: "Karol",
  lastName: "Arevalo",
  phone: "3185483531",
  email: "kjarevalope@ufpso.edu.co"

};

console.log(array_semana);
console.log(array_gral);
console.log(array_num);
console.log(array_multi);
console.log(json_ejem);

function action(){
  
  // alert(""+array_num)
 // Swal.fire(""+array_num);
 //console.log(array_num);
 
 var result =0;
 for(let i=0; i <array_num.length; i++){
   result= result+array_num[i]
   
   
  }
  document.getElementById("result").innerHTML=" <strong> el resultado es: <strong> "+ result +"</strong>";
  document.getElementById("result").style.color="green";

  var total=0;
  for(var j=0; j<array_multi.length; j++){
    total=array_multi[j].age+ total;
    }

    alert(total);

    //con un while 
    var total_dos=0;
    var w= 0;
    while (w<array_multi.length){
      total_dos=array_multi[w].age+ total_dos;
      w++;
    }
    alert(total_dos);
  }

  var array_numerico=[1, 2, 3, 4,  5, 6, 7, 8, 9];
  function eliminar(){
    let  array_delete = array_numerico.pop();
    console.log(array_delete);
    console.log(array_numerico);
    document.getElementById("impresion").value=array_numerico;

  }
  function eliminar_prim(){
    let array_delete = array_numerico.shift();
    console.log(array_delete);
    console.log(array_numerico);
    document.getElementById("impresion").value= array_numerico;
  }

  function agregar(){
    let num = document.getElementById("num").value;
    let  array_add= array_numerico.push(num);
    console.log(array_add);
    console.log(array_numerico);
    document.getElementById("impresion").value=array_numerico;
    if(isNaN(num)==true){
      swal.fire("solo se aceptan numeros ")

    }
  }
  function agregar_prim(){
    let num = document.getElementById("num").value;
    let  array_add= array_numerico.unshift(num);
    console.log(array_add);
    console.log(array_numerico);
    document.getElementById("impresion").value=array_numerico;
  }
  function reves(){
    document.getElementById("impresion").value= array_numerico.reverse();
  }

  function limpiar(){
    document.getElementById("num").value="";
    document.getElementById("name").value="";
    document.getElementById("last_name").value="";
    document.getElementById("result").innerText="";
  }
  var nombre_form="Merly Tarazona Sepulveda";

  function search(){
  let nombre_buscar = document.getElementById("name_search").value;
 // Swal.fire(nombre_buscar.toLowerCase());
  //Swal.fire({
    //text: nombre_buscar.toLowerCase(), //toUpperCase() mayus
    //title: "Alguna de las cajas se encuentra vacia ",
    //icon: "error",
  //})
 // let word=nombre_buscar.indexOf("e");
// let word=nombre_buscar.subString(5,15);

let word=nombre_buscar.split("");
  swal.fire(word+"");
  console.log(word);

  let word_com = word.join("");
  console.log(word_com)



  }






