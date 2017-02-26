var five = require("johnny-five");

var board = new five.Board();
/* PINOUT */

/*
=== Digital ===
Pin00 - RX
Pin01 - TX
Pin02 - Pulsador
Pin03 - Led Verde
Pin04 - Led Amarillo
Pin05 - Led Rojo
Pin06 - N/A
Pin07 - Servo
Pin08 - MotorA
Pin09 - MotorA
Pin10 - MotorA
Pin11 - MotorB
Pin12 - MotorB
Pin13 - MotorB

=== Analógico ===

PinA0 - Potenciometro
PinA1 - LDR
PinA2 - (LIBRE)
PinA3 - (LIBRE)
PinA4 - (LIBRE)
*/


board.on("ready", function() {


/* LEDS */

  var led1 = new five.Led(3);
  var led2 = new five.Led(4);
  var led3 = new five.Led(5);


/* ANALÓGICOS */

  var potenciometro = new five.Sensor("A0");
  var ldr = new five.Sensor("A1");


/* SERVO */

  var servo = new five.Servo(7);


/* MOTORES */

//motorA
  var motorA = new five.Motor({
    pins: {
      pwm: 10,
      dir: 8,
      cdir: 9
    }
  });

//motorB
  var motorB = new five.Motor({
    pins: {
      pwm: 11,
      dir: 12,
      cdir: 13
    }
  });  


/*PULSADOR */

  var pulsador = new five.Button(2);
});