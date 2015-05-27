function numberAsAWord() {
    var n = jsConsole.readInteger('#tb-range-first');

    var tents = Math.floor(n / 10) % 10;
    var singleDigit = n % 10;
    var hundreds = Math.floor(n / 100);

    var singleDigitText = '';
    var tentsText = '';
    var hundredsText = '';
    var theenText = '';

    if (n===0) {
        jsConsole.writeLine('Zero');
        return;
    }
   
    if (n > 0 && n < 999) {
       
        switch (hundreds) {
            case 1: hundredsText += 'one hundred'; break;
            case 2: hundredsText += 'two hundred'; break;
            case 3: hundredsText += 'three hundred'; break;
            case 4: hundredsText += 'four hundred'; break;
            case 5: hundredsText += 'five hundred'; break;
            case 6: hundredsText += 'six hundred'; break;
            case 7: hundredsText += 'seven hundred'; break;
            case 8: hundredsText += 'eight hundred'; break;
            case 9: hundredsText += 'ninehundred'; break;

        }
        if (n > 100 && (n / 10 % 10 !== 0)) {
            hundredsText += ' and ';
        }
        switch (tents) {
            case 1: tentsText += 'ten'; break;
            case 2: tentsText += 'twenty'; break;
            case 3: tentsText += 'thirty'; break;
            case 4: tentsText += 'fourty'; break;
            case 5: tentsText += 'fifty'; break;
            case 6: tentsText += 'sixty'; break;
            case 7: tentsText += 'seventy'; break;
            case 8: tentsText += 'eighty'; break;
            case 9: tentsText += 'ninety'; break;
            default:

        }
        switch (singleDigit) {
            case 1: singleDigitText += 'one'; break;
            case 2: singleDigitText += 'two'; break;
            case 3: singleDigitText += 'three'; break;
            case 4: singleDigitText += 'four'; break;
            case 5: singleDigitText += 'five'; break;
            case 6: singleDigitText += 'six'; break;
            case 7: singleDigitText += 'seven'; break;
            case 8: singleDigitText += 'eight'; break;
            case 9: singleDigitText += 'nine'; break;
        }
        if (tents === 1) {
            var temp = tents + '' + singleDigit;
            switch (temp) {
                case "10": theenText += 'ten'; break;
                case "11": theenText += 'eleven'; break;
                case "12": theenText += 'twelve'; break;
                case "13": theenText += 'thirteen'; break;
                case "14": theenText += 'fourteen'; break;
                case "15": theenText += 'fifteen'; break;
                case "16": theenText += 'sixteen'; break;
                case "17": theenText += 'seventeen'; break;
                case "18": theenText += 'eighteen'; break;
                case "19": theenText += 'nineteen'; break;
            }
            var resultTeens = hundredsText + "" + theenText;
            function capitalizeResult() {
                return jsConsole.writeLine( resultTeens[0].toUpperCase() + resultTeens.slice(1));
            }
            capitalizeResult();
            return;
        }
        else {
            if (tents>1&&tents<10) {
                tentsText += " ";
            }
            var result = hundredsText + "" + tentsText + "" + singleDigitText;
            function capitalizeResult() {
                return jsConsole.writeLine(result[0].toUpperCase() + result.slice(1));
            }
            capitalizeResult();
        }

       
      
    }
  
    else {
        jsConsole.writeLine('Not a valid number!!!');
    }
   
}