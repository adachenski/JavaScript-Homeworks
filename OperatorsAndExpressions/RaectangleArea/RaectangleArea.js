function oddOrEven() {
    var width = jsConsole.readInteger('#tb-range-start');
    var height = jsConsole.readInteger('#tb-range-second');
    var area = width * height;
    jsConsole.writeLine("The area is: " + area);
}