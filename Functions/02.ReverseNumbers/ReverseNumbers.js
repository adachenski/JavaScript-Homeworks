function reverseNumbers() {
    var n = jsConsole.read('#tb-range-first'),
        array = [],
        count=0;
    
    //for (var i = 0; i < n.length; i++) {
    //    array[i] = n[i];
    //}

    for (var i = n.length - 1; i >= 0; i--) {
        array[count] = n[i];
        count++;
    }
    jsConsole.writeLine(array.join(''))
}