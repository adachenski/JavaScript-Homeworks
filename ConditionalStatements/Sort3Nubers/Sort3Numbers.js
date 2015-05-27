function multiplicatinSign() {
    var a = jsConsole.readInteger("#tb-range-first");
    var b = jsConsole.readInteger("#tb-range-second");
    var c = jsConsole.readInteger("#tb-range-third");

    if (a > b) {
        if ((a > c)&&(b>c)) {
            jsConsole.writeLine(a+","+b+","+c);
        }
        else if ((a>c)&&(c>b)) {
            jsConsole.writeLine(a + "," + c + "," + b);
        }
        else if (a < c) {
            jsConsole.writeLine(c+","+a+","+b);
        }

    }
    else if (b > a) {
        if ((b > c)&&(a>c)) {
            jsConsole.writeLine(b+","+a+","+c);
        }
        else if ((c>a)&&(b>c)) {
            jsConsole.writeLine(b + "," + c + "," + a);
        }
        else if (b < c) {
            jsConsole.writeLine(c+","+b+","+a);
        }
    }
    else if (a===b&&b===c) {
        jsConsole.writeLine(a + "," + b + "," + c);
    }
    else if (a === b) {
        if (c > a) {
            jsConsole.writeLine(c + "," + b + "," + a);
        }
        else if (c<a) {
            jsConsole.writeLine(a + "," + b + "," + c);
        }
    }
    else if (a === c) {
        if (b > c) {
            jsConsole.writeLine(b + "," + a + "," + c);
        }
        else if (b<c) {
            jsConsole.writeLine(a + "," + c + "," + b);
        }

    }
    else if (a === b) {
        if (c > a) {
            jsConsole.writeLine(c + "," + a + "," + b);
        }
        else if (c<a) {
            jsConsole.writeLine(a + "," + b + "," + c);
        }
    }
}