function quadraticEquation() {
    var a = jsConsole.readInteger("#tb-range-first");
    var b = jsConsole.readInteger("#tb-range-second");
    var c = jsConsole.readInteger("#tb-range-third");
    var d = b * b - 4 * a * c;

    if (a === 0) {
         jsConsole.writeLine('x = ' + (-c / b));
    }
    else {
        if (d < 0) {
             jsConsole.writeLine('no real roots');
        }
        else if (d === 0) {
             jsConsole.writeLine('x1 = x2 = ' + ((-b) / (2 * a)));
        }
        else {
             jsConsole.writeLine('x1 = ' + ((-b - Math.sqrt(d))) / (2 * a));
             jsConsole.writeLine('x2 = ' + ((-b + Math.sqrt(d))) / (2 * a));
        }
    }
}

