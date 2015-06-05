function repeatedNumbers() {
    var numbers = jsConsole.read('#tb-range-first'),
        numbersArray = numbers.split(/(?:,| )+/).map(Number),
        numberToFind = jsConsole.readInteger('#tb-range-second'),
        count=0;
    for (var i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i]===numberToFind) {
            count++;
        }
    }
    jsConsole.writeLine('The number: '+numberToFind+' has '+count+' occurances')
}
function testingArray() {
    var arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
    test(arr, 1);
    test(arr, 2);
    test(arr, 3);
    test(arr, 4);
    test(arr, 5);
}
function test(arr, count) {
    var countNumbers=0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === count) {
            countNumbers++;
            if (countNumbers===count) {
                return jsConsole.writeLine(count + ' has ' + countNumbers + ' ocurances...');
            }
        }
    }
}