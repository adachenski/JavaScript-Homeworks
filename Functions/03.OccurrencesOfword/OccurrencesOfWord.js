function printWords() {
    var textAreaField = jsConsole.read('#tb-range-first');
    var input = jsConsole.read('#tb-range-second');
    jsConsole.writeLine('input Text: ' + textAreaField);
    jsConsole.writeLine('input Word: ' + input);
    var count = 0,
        totalCount = 0;
    function findingWords(count, totalCount) {
        for (var i = 0; i < textAreaField.length; i++) {
            if (textAreaField[i] === input[0]) {
                count = 0;
                for (var j = i; j < i + input.length; j++) {
                    if (textAreaField[j] === input[count]) {
                        count++;
                        if (count === input.length) {
                            totalCount++;
                            continue;
                        }
                    }
                    else {
                        break;
                    }
                }
            }
        }
        return totalCount;
    }
    totalCount = findingWords(count, totalCount);


    jsConsole.writeLine('The word: ' + input + ' has ' + totalCount + ' occurrences ');
}