function thirdDigit() {
    var start = jsConsole.readInteger('#tb-range-start');
    var result = parseInt(start / 100)%10;
   

    if (result === 7) {
        jsConsole.writeLine(true);
    }
    else {
        jsConsole.writeLine(false);
    }
}