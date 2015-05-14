var five = require("johnny-five");
 
var board = new five.Board();
 
board.on("ready", function() {
 
/* VARIABLES DE EDUBASICA*/
  var led3 = new five.Led(5);
  var led2 = new five.Led(4);
  var led1 = new five.Led(3);
 
  var potenciometro = new five.Sensor("A0");
   
  var ldr = new five.Sensor({
    pin: "A1",
    // valor por defecto es 250ms
    freq: 1000
  });
 
  var servo = new five.Servo(7);
 
  var motorA = new five.Motor({
    pins: {
      pwm: 10,
      dir: 8,
      cdir: 9
    }
  });
 
  var motorB = new five.Motor({
    pins: {
      pwm: 11,
      dir: 12,
      cdir: 13
    }
  });  
 
  var pulsador = new five.Button(2);
 
/* FUNCIONES */
 
function linea () {
  console.log('---------------------------------');
}
 
function vinCheck () {
  console.log('Por favor, revisa que el boton de corriente esta activo!');
};
 
 
function encenderLed3 () {
    led3.on();
};
 
function encenderLed2 () {
    led2.on();
};
 
function encenderLed1 () {
    led1.on();
};
 
var encenderLedVerde = encenderLed1;
var encenderLedNaranja = encenderLed2;
var encenderLedRojo = encenderLed3;
 
 
function parpadearLeds () {
    led3.blink();
    led2.blink();
    led1.blink();
};
 
function encenderLeds () {
    led3.on();
    led2.on();
    led1.on();
};
 
function potenciometroBasico () {
  console.log("Potenciometro iniciado... ");
  console.log("- Mueva el potenciometro para disparar los eventos asociados.");
  potenciometro.scale(0, 1023).on("change", function() {
  console.log("Potenciometro: "+this.value);
  });
};
 
function potenciometroLeds () {
  console.log("Potenciometro iniciado... ");
  console.log("- Mueva el potenciometro para disparar los eventos asociados.");
  potenciometro.scale(0, 1023).on("change", function() {
  //console.log("Potenciometro: "+this.value);
 
  if(this.value <= 100) {
    led3.off();
    led2.off();
    led1.off();
    //console.log("Valor menor de 100, todo apagado");
  }
  else if(this.value <= 400) {
    led3.off();
    led2.off();
    led1.on();
    //console.log("Valor menor de 400, led1 (Verde) encendido");
  }
  else if(this.value <= 700) {
    led3.off();
    led2.on();
    led1.on();
    //console.log("Valor menor de 700, led1 (Verde) y led2 (Naranja) encendidos");
  }
  else if(this.value <= 1023) {
    led3.on();
    led2.on();
    led1.on();
    //console.log("Valor menor de 1023, todos los LEDs encendidos");
  }
  else {
    console.log("No se soluciona el valor del Potenciometro: " +potenciometro.value);
  };
  });
};
 
function ldrBasico () {
  console.log("LDR iniciado...");
  ldr.scale(0, 1023).on("change", function() {
  console.log("LDR: "+this.value);
  });
};
 
function servoBasico () {
  console.log("Servo iniciado...");
  vinCheck();
  servo.sweep();
};
 
function motorBBasico () {
    board.wait(5000, function() {
    console.log("Prueba de motorA iniciada...");
    vinCheck();
    motorB.reverse(255);      
    console.log("MotorB al reves");
  });
  
  board.wait(10000, function() {
    motorB.forward(255);
    console.log("MotorB a delante");
  });
 
  board.wait(15000, function() {
    motorB.stop();
    console.log("MotorB parado");
    console.log("Terminada la prueba de motor...");
  });
};
 
function motorBAvance () {
    console.log("Prueba de motorB iniciada...");
    vinCheck();
    motorB.forward(255);
    console.log("MotorB a delante");
};
 
function motorBReversa () {
    console.log("Prueba de motorB iniciada...");
    vinCheck();
    motorB.reverse(255);
    console.log("MotorB al reves");    
};
 
function motorABasico () {
    board.wait(5000, function() {
    console.log("Prueba de motorA iniciada...");
    vinCheck();
    motorA.reverse(255);      
    console.log("MotorA al reves");
  });
  
  board.wait(10000, function() {
    motorA.forward(255);
    console.log("MotorA a delante");
  });
 
  board.wait(15000, function() {
    motorA.stop();
    console.log("MotorA parado");
    console.log("Terminada la prueba de motor...");
  });
};
 
function motorAAvance () {
    console.log("Prueba de motorA iniciada...");
    vinCheck();
    motorA.forward(255);
    console.log("MotorA a delante");
};
 
function motorAReversa () {
    console.log("Prueba de motorA iniciada...");
    vinCheck();
    motorA.reverse(255);
    console.log("MotorA al reves");    
};
 
function motoresBasico () {
    board.wait(5000, function() {
    console.log("Prueba de ambos motores iniciada...");
    vinCheck();
    motorA.reverse(255);      
    motorB.reverse(255);
    console.log("MotorA y MotorB al reves");
  });
  
  board.wait(10000, function() {
    motorA.forward(255);
    motorB.forward(255);
    console.log("MotorA y MotorB a delante");
  });
 
  board.wait(15000, function() {
    motorA.stop();
    motorB.stop();
    console.log("MotorA y MotorB parados");
    console.log("Terminada la prueba de motores...");
  });
};
 
function motoresAvance () {
    console.log("Prueba de ambos motores iniciada...");
    vinCheck();  
    motorA.forward(255);
    motorB.forward(255);
    console.log("MotorA y MotorB a delante");
};
 
function motoresReversa () {
    console.log("Prueba de ambos motores iniciada...");
    vinCheck();  
    motorA.reverse(255);      
    motorB.reverse(255);
    console.log("MotorA y MotorB al reves");
};
 
function pulsadorBasico () {
  console.log("Pulsador iniciado...");
  console.log("- Presione el pulsador para disparar los eventos asociados.");
  pulsador.on("hold", function() {
    console.log( "Pulsador mantenido" );
  });
 
  pulsador.on("press", function() {
    console.log( "Pulsador presionado" );
  });
 
  pulsador.on("release", function() {
    console.log( "Pulsador liberado" );
  });
};
 
function pulsadorLeds () {
  console.log("Pulsador iniciado...");
  console.log("- Presione el pulsador para disparar los eventos asociados.");
    led3.off();
    led2.off();
    led1.off();
   
  pulsador.on("hold", function() {
    led3.on();
    led2.on();
    led1.on();
    console.log( "Pulsador mantenido" );
  });
   
  pulsador.on("press", function() {
    led3.off();
    led2.off();
    led1.on();
    console.log( "Pulsador presionado" );
  });
   
  pulsador.on("release", function() {
    led3.on();
    led2.off();
    led1.off();
    console.log( "Pulsador liberado" );
  });
};
 
function fullTest () {
   
  potenciometroLeds();
  ldrBasico();
  servoBasico();
  motoresBasico(); 
  pulsadorBasico();
 
};
 
 
/* INTERACCION */
 
 var myArgs = process.argv.slice(2);
 console.log('Comando: ', myArgs);
 ayuda = 'Más información disponible en Github. https://github.com/UlisesGascon/edubasica';
 
 switch (myArgs[0]) {
   case 'ayuda':
      linea();   
      console.log(ayuda);
      linea();    
    break;
   case 'encenderLeds':
      linea();
      console.log('Encendiendo todos los Leds...');   
      encenderLeds();
      linea();
    break;
   case 'parpadearLeds':
      linea();   
      console.log('Iniciando el parpadeo de todos los Leds...');    
      parpadearLeds();
      linea();    
    break;
   case 'encenderLed1':
      linea();   
      console.log('Encendiendo el led verde (Led1)');    
      encenderLed1();
      linea();    
    break;
   case 'encenderLedVerde':
      linea();   
      console.log('Encendiendo el led verde (Led1)');    
      encenderLedVerde();
      linea();    
    break;
   case 'encenderLed2':
      linea();   
      console.log('Encendiendo el led naranja (Led2)');    
      encenderLed2();
      linea();    
    break;
   case 'encenderLedNaranja':
      linea();   
      console.log('Encendiendo el led naranja (Led2)');    
      encenderLedNaranja();
      linea();    
    break;
   case 'encenderLed3':
      linea();   
      console.log('Encendiendo el led rojo (Led3)');    
      encenderLed3();
      linea();    
    break;
   case 'encenderLedRojo':
      linea();   
      console.log('Encendiendo el led rojo (Led3)');    
      encenderLedRojo();
      linea();    
    break;
   case 'potenciometroBasico':
      linea();   
      console.log('Iniciando solo la lectura del potenciometro...');    
      potenciometroBasico();
      linea();    
    break;
   case 'potenciometroLeds':
      linea();   
      console.log('Iniciando la lectura del potenciometro y su reflejo en los leds...');    
      potenciometroLeds();
      linea();    
    break;
   case 'ldrBasico':
      linea();   
      console.log('Iniciando solo la lectura del LDR...');    
      ldrBasico();
      linea();    
    break;
   case 'servoBasico':
      linea();   
      console.log('Iniciando el servo y ajustando el bucle...');    
      servoBasico();
      linea();    
    break;
   case 'motoresBasico':
      linea();   
      console.log('Iniciando ambos motores y ajustando la secuencia...');    
      motoresBasico();
      linea();    
    break;    
   case 'motoresAvance':
      linea();   
      console.log('Iniciando ambos motores hacia delante...');    
      motoresAvance();
      linea();    
    break;                                
   case 'motoresReversa':
      linea();   
      console.log('Iniciando ambos motores hacia atras...');    
      motoresReversa();
      linea();    
    break;
   case 'motorABasico':
      linea();   
      console.log('Iniciando el motorA y ajustando la secuencia...');    
      motorABasico();
      linea();    
    break;    
   case 'motorAAvance':
      linea();   
      console.log('Iniciando el motorA hacia delante...');    
      motorAAvance();
      linea();    
    break;                                
   case 'motorAReversa':
      linea();   
      console.log('Iniciando el motorA hacia atras...');    
      motorAReversa();
      linea();    
    break;
   case 'motorBBasico':
      linea();   
      console.log('Iniciando el motorB y ajustando la secuencia...');    
      motorBBasico();
      linea();    
    break;    
   case 'motorBAvance':
      linea();   
      console.log('Iniciando el motorB hacia delante...');    
      motorBAvance();
      linea();    
    break;                                
   case 'motorBReversa':
      linea();   
      console.log('Iniciando el motorB hacia atras...');    
      motorBReversa();
      linea();    
    break;    
   case 'pulsadorLeds':
      linea();   
      console.log('Iniciando la lectura del pulsador y su reflejo en los leds...');    
      pulsadorLeds();
      linea();    
    break;
   case 'pulsadorBasico':
      linea();   
      console.log('Iniciando solo la lectura del pulsador...');    
      pulsadorBasico();
      linea();    
    break;
   default:
      linea();     
      console.log("Iniciando el Test total por defecto...");
      fullTest();
      linea();             
 };
});