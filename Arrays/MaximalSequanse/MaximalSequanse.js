//2,1,1,2,3,3,2,2,2,1         --->2,2,2
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
    theSmallest = 0;
    current = 0;
    for (var i = 0; i < numbers.length-1; i++) {
        if (numbers[i]===numbers[i+1]) {
            current++;
            if (theSmallest<current) {
                theSmallest = current;
                theBiggest = numbers[i];
            }
            
           
        }
        else {
            current = 0;
        }
    }
    for (var i = 0; i <=theSmallest; i++) {
        jsConsole.write(theBiggest+',');
        console.log(theBiggest+',');
    }
}


