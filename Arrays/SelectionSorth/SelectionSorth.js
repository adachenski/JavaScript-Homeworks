//3,2,3,4,2,2,4        --->2,3,4
function maximalSequanse() {
    var n = jsConsole.read('#tb-range-first'),
     numbers = [],
     count = 0,
     theSmallest,
     theBiggest,
     current;
    for (var i = 0; i < n.length; i++) {
        if (n[i] > -10 && n[i] < 10) {
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
    var arr = [];
    for (var i = 0; i < numbers.length; i++) {
        for (var j = i, l=numbers.length; j <l ; j++) {
            if (numbers[j] < numbers[i]) {
                current = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = current;
            }
        }
    }
    jsConsole.write(numbers.join(', '));
    console.log(numbers.join(', '));

}


 