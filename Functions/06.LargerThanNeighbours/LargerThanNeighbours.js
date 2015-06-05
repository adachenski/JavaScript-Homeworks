function printNumbers() {
    var numbers = jsConsole.read('#tb-range-first'),
    numbersArray = numbers.split(/(?:,| )+/).map(Number),
    positionNumber = jsConsole.readInteger('#tb-range-second');
    jsConsole.writeLine(numbersArray[positionNumber]);
    if (numbersArray[0] == 0) {

        jsConsole.writeLine('first element must have value > 0');
        return;
    }
    if (isNaN(positionNumber)) {
        jsConsole.writeLine('You must enter a position!!!');
        return;
    }
    if (typeof(numbersArray[positionNumber - 1]) === 'undefined') {
        if (numbersArray[positionNumber] > numbersArray[positionNumber + 1]) {
            jsConsole.writeLine(true);
            return;
        }
        else {
            jsConsole.writeLine(false);
            return;
        }
    }
    if (typeof (numbersArray[numbersArray.length-1]) === numbersArray[positionNumber]) {
        if (numbersArray[positionNumber] > numbersArray[positionNumber - 1]) {
            jsConsole.writeLine(true);
            return;
        }
        else {
            jsConsole.writeLine(false);
            return;
        }
    }
    if (numbersArray[positionNumber] > numbersArray[positionNumber - 1] &&
        numbersArray[positionNumber] > numbersArray[positionNumber + 1]) {
        jsConsole.writeLine(true);
    }
    else {
        jsConsole.writeLine(false);
    }
}