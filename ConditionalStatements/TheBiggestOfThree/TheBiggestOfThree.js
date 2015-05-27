function multiplicatinSign() {
    var a = jsConsole.readInteger("#tb-range-first");
    var b = jsConsole.readInteger("#tb-range-second");
    var c = jsConsole.readInteger("#tb-range-third");

    if (a > b) {
        if (a > c) {
            jsConsole.writeLine(a);
        }
        else if (a < c) {
            jsConsole.writeLine(c);
        }

    }
    else if (b > a) {
        if (b > c) {
            jsConsole.writeLine(b);
        }
        else if (b < c) {
            jsConsole.writeLine(c);
        }
    }
    else if (a === b) {
        if (c > a) {
            jsConsole.writeLine(c);
        }
    }
    else if (a === c) {
        if (b > c) {
            jsConsole.writeLine(b);
        }

    }
    else if (a === b) {
        if (c > a) {
            jsConsole.writeLine(c);
        }
    }
    else if (a===b&&b===c) {
        jsConsole.writeLine(a);
    }

}