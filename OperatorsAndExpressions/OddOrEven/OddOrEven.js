function oddOrEven() {
    var start = jsConsole.readInteger('#tb-range-start');
    if (start % 2 == 0) {
        jsConsole.writeLine("Integer id Even!!!")
    }
    else if (start % 2 == 1) {
        jsConsole.writeLine("Integer id Odd!")
    }
    else {
        jsConsole.writeLine("Not a number")
    }
}