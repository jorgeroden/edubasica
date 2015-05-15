![](http://www.blog.ulisesgascon.com/wp-content/uploads/2015/05/edubasica01.jpg)

# EDUBASICA Shield con Nodejs
## Controlar Edubasica con javascript usando Nodejs y Johnny-five

La idea es usar javascript para controlar EduBasica shield y Arduino. Opcionalmente se pueden adaptar los scripts sino se tiene una placa EduBasica.

_**Note:** English version is here (under development at the momment)._

## Introducción e instalacion
** EduBasica, nodejs y Johnny-five **


### Introducción

**Eduasica** 

> EduBasica es una tarjeta multipropósito con componentes electrónicos incluidos 
> que puedes usar para fabricar un robot, controlar un sistema de poleas, activar barreras, 
> comunicar dispositivos bluetooth, y todo lo que te puedas imaginar para realizar cientos de prácticas.

[Sitio oficial](http://practicasconarduino.com)
[Esquemas y circuitos](https://github.com/jorgeroden/edubasica)
[Libro de ejercicios](http://www.practicasconarduino.com/libro/)
[FAQ](http://www.practicasconarduino.com/faq/)


**Nodejs**

> Node.js es un entorno de programación en la capa del servidor (pero no limitándose a ello) basado 
> en el lenguaje de programación ECMAScript, asíncrono, con I/O de datos en una arquitectura orientada 
> a eventos y basado en el motor V8 de Google.

[Documentación](https://nodejs.org/documentation/) 
[Nodeschool/](http://nodeschool.io/)
[API](https://nodejs.org/api/)
[Introducción a NodeJS a traves de Koans](http://nodejskoans.com/)
[Meetup - Nodejs Madrid](http://www.meetup.com/es/Node-js-Madrid/) 

**Johnny-Five**

> Johnny-Five is an Open Source, Firmata Protocol based, IoT and Robotics programming framework, 
> developed at Bocoup. Johnny-Five programs can be written for Arduino (all models), Electric Imp, 
> Beagle Bone, Intel Galileo & Edison, Linino One, Pinoccio, pcDuino3, Raspberry Pi, Spark Core, TI 
> Launchpad and more!

[Noticias](http://johnny-five.io/news/)
[API](http://johnny-five.io/api/)
[Ejemplos](http://johnny-five.io/examples/)
[Blog/Aticulos](http://johnny-five.io/articles/)
[Plataformas soportadas](http://johnny-five.io/platform-support/)


### Instalación

Instalamos [nodejs](https://nodejs.org/). 

Descargamos el repositorio en la carpeta deseada.

	git clone https://github.com/UlisesGascon/edubasica.git

Instalamos J5.

	npm install -g johnny-five



## EduBasica.js

Este script es la base para desarrollar un proyecto con EduBasica, todas las variables del esquema electronico estan definidas. 

** EduBasica PinOut **

![](http://www.blog.ulisesgascon.com/wp-content/uploads/2015/05/edubasica_v2_pinout.jpg)

** EduBasica PinOut con J5 **

```javascript
/* INICIAR JOHNNY-FIVE */
var five = require("johnny-five");

var board = new five.Board();
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
```

## Test.js

test.js nos permite hacer un test de toda la placa por completo o de funciones especificas. La manera de funcionar es a traves de la consola de Nodejs.

En primer lugar debemos ejecutar el script.

	node test.js (argumento)

El argumento es opcional, al ejecutar el script sin argumento o con un argumento no valido por defecto se ejecuta la funcion fullTest que incluye potenciometro, ldr, pulsador, motores y servo.

Se puede definir que parte testear gracias a los argumentos, solo es necesario incluirlo durante la ejecución. Por ejemplo

	node test.js potenciometroLeds

En este ejemplo node ejecutaria la función potenciometroLeds, que enciende y apaga los leds en función del valor en el potenciometro.

Nota: Todos los scripts relacionados con motores y servos requieren de hardware adiccional (motores y servos), aun sin ellos se pueden ejecutar los scripts.

Importante: El interruptor junto al led VIN, activa y desactiva la corriente hacia los motores y el servo. Por favor, verifica que este apagado o encendido para las prácticas que los incluyen.


** Tabla de Argumentos, funciones y comportamiento **

| Argumento | Función | Comportamiento |
| --- | --- | --- |
| (vacio) | fullTest (); | Test completo (pulsador, potenciometro, motores, servo...)  | 
| encenderLeds | encenderLeds(); | Encender todos los leds. |
| parpadearLeds | parpadearLeds(); | Parpadear todos los leds. |
| encenderLed1 | encenderLed1(); | Lorem |
| encenderLedVerde | encenderLedVerde(); | Encender el Led1 (Verde). |
| encenderLed2 | encenderLed2(); | Lorem |
| encenderLedNaranja | encenderLedNaranja(); | Encender el Led2 (Naranja). |
| encenderLed3 | encenderLed3(); | Lorem |
| encenderLedRojo | encenderLedRojo(); | Encender el Led3 (Rojo). |
| potenciometro | potenciometroBasico(); | Solo lectura |
| potenciometroLeds | potenciometroLeds(); | Lectura + Leds |
| ldrBasico | ldrBasico(); | Solo lectura | 
| servo | servoBasico(); | Loop 180º sin parar |
| motores | motoresBasico(); | Motores avance / 5' retroceso / 10' parada |
| motoresAvance | motoresAvance(); | Motores avance non-stop |
| motoresReversa | motoresReversa(); | Motores reversa non-stop |
| motorA | motorABasico(); | MotorA avance / 5' retroceso / 10' parada |
| motorAAvance | motorAAvance(); | MotorA avance non-stop |
| motorAReversa | motorAReversa(); | MotorA reversa non-stop |
| motorB | motorBBasico(); | MotorB avance / 5' retroceso / 10' parada |
| motorBAvance | motorBAvance(); | MotorB avance non-stop |
| motorBReversa | motorBReversa(); | MotorB reversa non-stop |
| pulsador | pulsadorBasico(); | Pulsador lectura |
| pulsadorLeds | pulsadorLeds(); | Pulsador lectura + Leds |