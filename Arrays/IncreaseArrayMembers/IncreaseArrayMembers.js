function arrayMembers() {
    var n = jsConsole.read('#tb-range-first');
    var numbers = [];
    var count = 0;
    var theSmalles;
    var theBiggest;
    var current;
    for (var i = 0; i < n.length; i++) {
        if (n[i] > -9 && n[i] < 10) {
            current = n[i];
            for (var j = i + 1; j < n.length; j++) {
                if (n[j] === ',') {
                    break;
                }
                else {
                    current += n[j];
                    i++;
                }
            }
            numbers[count] = parseInt(current);
            count++;

        }
    }

    for (var i = 0; i < numbers.length; i++) {
        jsConsole.writeLine(numbers[i] + ' * 5 = ' + numbers[i] * 5);
        console.log(numbers[i] + ' * 5 = ' + numbers[i] * 5);
    }
}


