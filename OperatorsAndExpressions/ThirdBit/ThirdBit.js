function thirdBit() {
    var start = jsConsole.readInteger('#tb-range-start');
    var mask = start >> 2;
    var result = 1 & mask;
    jsConsole.writeLine(result);
}