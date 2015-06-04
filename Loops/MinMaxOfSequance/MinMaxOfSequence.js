function minMaxOfSequence() {
    var n = jsConsole.read('#tb-range-first');
    var numbers = [];
    var count = 0;
    var theSmalles;
    var theBiggest;
    var current;
    for (var i = 0; i < n.length; i++) {
        if (n[i] > -9 && n[i] < 10) {
            current = n[i];
            for (var j = i+1; j < n.length; j++) {
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
    theSmalles = numbers[0];
    theBiggest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        
        if (numbers[i+1]<theSmalles) {
            theSmalles = numbers[i+1];
        }
        if (numbers[i+1]>theBiggest) {
            theBiggest = numbers[i + 1];
        }
    }
	console.log(theBiggest);
    jsConsole.writeLine('The smallest number is:' + theSmalles);
    jsConsole.writeLine('The biggest number is:' + theBiggest);
}