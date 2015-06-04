function notDevisible() {
    var n = jsConsole.readInteger('#tb-range-first');
    for (var i = 1; i <= n; i++) {
        if (i%3===0&&i%7===0) {
            continue;
        }
        jsConsole.writeLine(i);
    }
}