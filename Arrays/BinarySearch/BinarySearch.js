
function binarySearch() {
    var n = jsConsole.read('#tb-range-first'),
     final = jsConsole.read('#tb-range-second'),
     numbers = [],
     count = 0,
     foundNumber,
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

    var temp,
        temp1;

    while (temp != final) {
        temp1 = numbers.length / 2;
        temp1 = temp1 | 0;
        temp = numbers[temp1];
      
        if (temp > final) {
            numbers = numbers.splice(0, temp1)
        }
        else if (temp < final) {
            numbers = numbers.splice(temp1, numbers.length)
        }
        else if (temp == final) {
            jsConsole.write('Number found!!!');
            console.log('Number found!!!');
            break;
        }
        if (numbers.length <= 1) {
            jsConsole.write('Number NOT found!!!');
            console.log('Number NOT found!!!');
            break;
        }
     
    }


}


