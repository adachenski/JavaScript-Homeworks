function exchangeIfGreater() {
    var a = jsConsole.readInteger('#tb-range-first');
    var b = jsConsole.readInteger('#tb-range-second');
    if (a > b) {
        var c = b;
        b = a;
        a = c;
    }
    jsConsole.writeLine(a + " " + b);
}