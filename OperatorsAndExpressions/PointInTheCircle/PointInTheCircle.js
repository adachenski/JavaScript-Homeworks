function pointInTheCircle() {
    var x = jsConsole.readInteger('#tb-range-start');
    var y = jsConsole.readInteger('#tb-range-second');
    var centerX = 0;
    var centerY = 0;
    var k = 2;
    var inTheCircle = false;
    if (Math.pow((x - centerX), 2) + Math.pow((y - centerY), 2) <= Math.pow(k, 2)) {
        inTheCircle = true;
    }
    jsConsole.writeLine(inTheCircle);
}