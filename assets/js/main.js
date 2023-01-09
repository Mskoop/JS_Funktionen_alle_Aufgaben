
// ================ Aufgabe 1.1

function intro() {
    // Deklariere die Variable a mit dem Wert 1 + 3.
    let a = 1 + 3;

    // Gib zusätzlich Hello World in der Konsole aus.
    console.log("Hallo World");

    //Gib den String “1+3 = “ + a in der Konsole aus.
    console.log("1+3 = " + a);
}
// call der Function
intro();



// =============== Aufgabe 1.2

function intro2(paramName) {

    //Deklariere die Variable varName mit dem Wert “SuperCoder”.
    let varName = "Supercoder";

    //Gib dazu “Hi, “ + varName + “. Mein Name ist ” + paramName + “ .” in der Konsole aus.
    console.log("Hi " + varName + ". Mein Name ist " + paramName + ".");
}
// Gib als Argument deinen eigenen Namen ein.
intro2 ("Maciek");



 // ================ Aufgabe 1.3

/* Gib unter Verwendung der entsprechenden Argumente folgende Sätze in der Konsole aus:
Hallo, mein Name ist SuperCoder. Ich bin 27 Jahre alt. Ich komme aus Düsseldorf.
*/

//Deklariere die Funktion intro3() mit den drei Parametern (name, stadt, alter).
function intro3(name, stadt, alter) {

    console.log("Hallo, " + "mein Name ist " + name + " . Ich bin " + alter  +" Jahre alt. Ich komme aus " + stadt + ".");
}

intro3 ("Maciek", "Köln", 53 );

/* ========= andere Variante!:==============

 function intro3(name, stadt, alter) {
    name = "Maciek";
    stadt = "Köln";
    alter = "53";
    console.log(
      "Hallo, mein Name ist " + name + ". Ich bin " +  alter + " alt. " + "Ich komme aus " + stadt + ".");
  }
  intro3(); */



//===========  Aufgabe 1.5

function math(num1, num2) {
   /*  par1 = 10;
    par2 = 2; */
    console.log( num1 * num2);
    console.log( num1 / num2);
}
math (10, 2);
math (30, 20);
math(100, 100);
math(5, 0);
math(45, 173);
math(1, 1000);


/* ==== Anderer Lösungsweg! =========
function math(number1, number2) {
    let multiplikation = number1 * number2;
    let division = number1 / number2;
    console.log(multiplikation, division);
  }
  math(10, 2); */