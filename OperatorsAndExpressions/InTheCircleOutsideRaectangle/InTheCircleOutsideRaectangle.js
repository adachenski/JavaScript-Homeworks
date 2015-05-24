function pointInTheCircle() {
    var x = jsConsole.readInteger('#tb-range-start');
    var y = jsConsole.readInteger('#tb-range-second');
    var centerX = 1;
    var centerY = 1;
    var k = 1.5;

    var inTheCircle = false;
    var inRaectangle = false;

    var raecLeftX = -1;
    var raecTopY = 1;
    var raecHight = 2;
    var raecWidth = 6;

    if (Math.pow((x - centerX), 2) + Math.pow((y - centerY), 2) <= Math.pow(k, 2)) {
        inTheCircle = true;
    }
    if (x >= raecLeftX && x <= raecLeftX + raecWidth && y <= raecTopY && y >= raecTopY - raecHight) {
        inRaectangle = true;
    }
    if (inTheCircle == true && inRaectangle == false) {
        jsConsole.writeLine("yes");
    }
    else {
        jsConsole.writeLine("no");
    }
}