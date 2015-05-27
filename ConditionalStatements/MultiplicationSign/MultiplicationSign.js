function multiplicatinSign() {
    var a = jsConsole.readInteger("#tb-range-first");
    var b = jsConsole.readInteger("#tb-range-second");
    var c = jsConsole.readInteger("#tb-range-third");

    if (a > 0 && b > 0 && c > 0) {
        jsConsole.writeLine("+");
    }
    else if (a < 0 && b < 0 && c < 0) {
        jsConsole.writeLine("-");
    }
    else if (a === 0 || b === 0 || c === 0) {
        jsConsole.writeLine("0");
    }
    else if ((a > 0 && b > 0) || (b > 0 && c > 0) || (a > 0 && c > 0)) {
        jsConsole.writeLine("-");
    }
    else if ((a < 0 && b < 0) || (b < 0 && c < 0) || (a < 0 && c < 0)) {
        jsConsole.writeLine("+");
    }

}