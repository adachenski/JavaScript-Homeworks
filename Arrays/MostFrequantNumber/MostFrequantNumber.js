//4,1,1,4,2,3,4,4,5,6,6,4  ===> -4(5times)
function maximalSequanse() {
    var n = jsConsole.read('#tb-range-first'),
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
  
    var temp=0,
        final;
    for (var i = 0; i < numbers.length; i++) {
        current = 0;
        for (var j = i, l = numbers.length; j < l ; j++) {
            if (numbers[j] === numbers[i]) {
                current++;
                foundNumber = numbers[i];
            }
           
        }
        if (temp < current) {
            final = foundNumber;
            temp = current;
        }
    }
    jsConsole.write(final+'('+temp+' times '+')');
    console.log(final + '(' + temp + ' times ' + ')');

}


