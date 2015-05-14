var five = require("johnny-five");

var board = new five.Board();

// No hace falta realizar cambios o conectar nada al shield.

board.on("ready", function() {

/* LEDS */

  var led3 = new five.Led(5);
  var led2 = new five.Led(4);
  var led1 = new five.Led(3);

/* POTENCIOMETRO */

  var potenciometro = new five.Sensor("A0");
  // Ajusta los datos del sensor a una escala 0-1023 y 
  // habilitar una función para monitorizar los cambios de valor en el potenciometro.
  potenciometro.scale(0, 1023).on("change", function() {

  // (Quitar el próximo comentario) En caso de querer monitorizar cada cambio en consola.
  //console.log("Potenciometro: "+this.value);

if(this.value <= 100) {
  led3.off();
  led2.off();
  led1.off();
  // (Quitar el próximo comentario) En caso de querer monitorizar cada cambio en consola.
  //console.log("Valor menor de 100, todo apagado");
}
else if(this.value <= 400) {
  led3.off();
  led2.off();
  led1.on();
  // (Quitar el próximo comentario) En caso de querer monitorizar cada cambio en consola.
  //console.log("Valor menor de 400, led1 (Verde) encendido");
}
else if(this.value <= 700) {
  led3.off();
  led2.on();
  led1.on();
  // (Quitar el próximo comentario) En caso de querer monitorizar cada cambio en consola.
  //console.log("Valor menor de 700, led1 (Verde) y led2 (Naranja) encendidos");
}
else if(this.value <= 1023) {
  led3.on();
  led2.on();
  led1.on();
  // (Quitar el próximo comentario) En caso de querer monitorizar cada cambio en consola.
  //console.log("Valor menor de 1023, todos los LEDs encendidos");
}
else {
   // En caso de que se detecten valores fuera de la escala (0-1023)
   console.log("No se solucionar el valor: " +potenciometro.value);
}
}); // fin de función
}); // fin de board