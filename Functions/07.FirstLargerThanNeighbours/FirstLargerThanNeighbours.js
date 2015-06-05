function printNumbers() {
    var numbers = jsConsole.read('#tb-range-first'),
    numbersArray = numbers.split(/(?:,| )+/).map(Number);

    for (var i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] > numbersArray[i - 1] && numbersArray[i] > numbersArray[i + 1]) {
            jsConsole.writeLine(i);
            return;
        }
        
    }
    jsConsole.writeLine(-1);
}