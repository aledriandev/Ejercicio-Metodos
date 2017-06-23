// Ejercicio 1
function Rectangulo(base,altura){
  this.base=base;
  this.altura=altura;
  this.area=function(){
    return this.base*this.altura;
  }
}
var respuesta= new Rectangulo(3,3);
console.log(respuesta.area());
sss

//Ejercicio 2
// los metodos son las funciones dentro del objeto
function Edad(nombre,dia,mes,anioNacimiento){
  this.nombre=nombre;
  this.dia=dia;
  this.mes=mes;
  this.anio=anioNacimiento;
  this.edad=function(){
    var anioActual=(new Date()).getFullYear();
    var mesActual=(new Date()).getMonth()+1;
    var diaActual=(new Date()).getDate();
    var _edad=anioActual-this.anio;
    if (mesActual<this.mes)
      _edad--;
    }else if (mesActual==this.mes && diaActual<this.dia) {
      _edad--;
    }
    return _edad;
  }
}
var myEdad= new Edad("Su",28,06,2015);
console.log("La edad actual de "+myEdad.nombre +" es "+ myEdad.edad());


//Ejercicio3
function Persona(nombre,edad,pasatiempo){
    this.nombre=nombre;
    this.edad=edad;
    this.pasatiempo=pasatiempo;
}
var mensaje= new Persona("Alejandra",23,"codear");
console.log("Hola soy "+ mensaje.nombre+" tengo "+mensaje.edad+" años y me gusta "+mensaje.pasatiempo);
