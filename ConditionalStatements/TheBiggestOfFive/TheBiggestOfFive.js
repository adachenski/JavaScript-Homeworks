function theBiggestOfFive() {
    var a = jsConsole.readInteger('#tb-range-first');
    var b = jsConsole.readInteger('#tb-range-second');
    var c = jsConsole.readInteger('#tb-range-third');
    var d = jsConsole.readInteger('#tb-range-fourth');
    var e = jsConsole.readInteger('#tb-range-fifth');

    var temp = -900000000;
    if (a > temp) {
        temp = a;
    }
    if (b > temp) {
        temp = b;
    }
    if (c > temp) {
        temp = c;
    }
    if (d > temp) {
        temp = d;
    }
    if (e > temp) {
        temp = e;
    }

    if (temp === -900000000) {
        jsConsole.writeLine('You must enter a numnber value!!!');
        return;
    }
    else {
        jsConsole.writeLine('The Biggest Number is:' + temp);
    }


}