function arrayMembers() {
    var n1 = jsConsole.read('#tb-range-first'),
        n2 = jsConsole.read('#tb-range-second')

    function makeCharArray(n) {
        var numbers = new Array(),
       count = 0,
       current;
        for (var i = 0; i < n.length; i++) {
            if ((n[i] >= 'a' && n[i] <= 'z') || (n[i] >= 'A' && n[i] <= 'Z')) {
                current = n[i];
                for (var j = i + 1; j < n.length; j++) {
                    if (n[j] === ',') {
                        break;
                    }
                    else {
                       // current += n[j];
                        i++;
                    }
                }
                numbers[count] = (current);
                count++;

            }
        }
        return numbers;
    }
    var first = makeCharArray(n1),
         second = makeCharArray(n2);

    jsConsole.writeLine('Char Array 1 : '+first.join(', '));

    jsConsole.writeLine('Char Array 2 : ' + second.join(', '));

    for (var i = 0; i < first.length; i++) {
        if (first[i] < second[i]) {
            jsConsole.writeLine(first[i] + ' < ' + second[i]);
            console.log(first[i] + '<' + second[i]);
        }
        else if (first[i] > second[i]) {
            jsConsole.writeLine(first[i] + ' > ' + second[i]);
            console.log(first[i] + '>' + second[i]);
        }
        else if (first[i] === second[i]) {
            jsConsole.writeLine(first[i] + ' === ' + second[i]);
            console.log(first[i] + '===' + second[i]);
        }
    }
}


