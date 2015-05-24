//integers
var octa = 0123;
var dec = 123;
var hex = 0x123;
//floating points
var floating = 1.234;
var exponential = 12.4e3;
//boolean
var buleanType = true;
//string
var stringText = "SomeText";
//special charecter
var charecter = '\n';
//object
var student = {
    FirstName: "Petar",
    LastName: "Petrov",
}
var arrayFruits = ["Orange", "Mango", "PineApple", "Grape"];
//problem2
var quotedString = "'How you doin '?', Joey said.";

jsConsole.writeLine("Problem 1 =========================");
jsConsole.writeLine("Octal (0123) = " + octa);
jsConsole.writeLine("Decimal (123) = " + dec);
jsConsole.writeLine("HexaDecimal \n (0x123) = " + hex);
jsConsole.writeLine("Floating (1.234) = " + floating);
jsConsole.writeLine("Exponential (12.4e3) = " + exponential);
jsConsole.writeLine("Bool = " + buleanType + " or " + !buleanType)
jsConsole.writeLine("String = " + stringText);
jsConsole.writeLine("Special Charecter (\\n)" + charecter);
jsConsole.writeLine("Object (Student) = First  Name: " + student.FirstName + " Last Name: " + student.LastName)
for (var i = 0; i < arrayFruits.length; i++) {
    jsConsole.writeLine("Fruit Array [" + i + "]" + arrayFruits[i]);
}
jsConsole.writeLine("Problem 2 =========================");
jsConsole.writeLine(quotedString);
jsConsole.writeLine("Problem 3 =========================");

jsConsole.writeLine("typeof(Octal) = " + typeof (octa));
jsConsole.writeLine("typeof(Decimal) = " + typeof (dec));
jsConsole.writeLine("typeof(HexaDecimal) = " + typeof (hex));
jsConsole.writeLine("typeof(floating) = " + typeof (floating));
jsConsole.writeLine("typeof(Exponential) = " + typeof (exponential));
jsConsole.writeLine("typeof(Bool) = " + typeof (buleanType))
jsConsole.writeLine("typeof(String) = " + typeof (stringText));
jsConsole.writeLine("typeof(Special Charecter) = " + typeof (charecter));
jsConsole.writeLine("typeof(Object) = " + typeof (student));
jsConsole.writeLine("typeof(Array) = " + typeof (arrayFruits));
jsConsole.writeLine("Problem 4 =========================");

var nullVariable = null;
var undefinedVariable = undefined;

jsConsole.writeLine("typeof(null)" + typeof (nullVariable));
jsConsole.writeLine("typeof(undefine)" + typeof (undefinedVariable));
console.log("Hassoman_64");