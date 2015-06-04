function numbersFrom1toN() {
    var n = jsConsole.readInteger('#tb-range-first');
    for (var i = 1; i <= n; i++) {
        jsConsole.writeLine(i);
    }
}
