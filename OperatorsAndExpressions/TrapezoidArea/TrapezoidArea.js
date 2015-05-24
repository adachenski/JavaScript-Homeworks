function trapezoid() {
    var baseA = jsConsole.readInteger('#tb-range-start');
    var baseB = jsConsole.readInteger('#tb-range-second');
    var height = jsConsole.readInteger('#tb-range-third');
    var area = ((baseA + baseB) / 2) * height;
    jsConsole.writeLine("The area is: " + area);
}