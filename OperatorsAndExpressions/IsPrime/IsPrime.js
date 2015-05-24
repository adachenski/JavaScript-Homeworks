function isPrime() {
    var start = jsConsole.readInteger('#tb-range-start');
    var end = Math.sqrt(start);
    if (start < 0 || start == 1) {
        jsConsole.writeLine(false);
        return;
    }
    for (var i = 2; i < end + 1; i++) {
        var isPrime = start % i == 0;
        if (isPrime) {
            jsConsole.writeLine(!isPrime);
            return;
        }

    }
    jsConsole.writeLine(!isPrime);
}