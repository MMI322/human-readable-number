module.exports = function toReadable(number) {
    let numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
        'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tenners = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let numberString = String(number);

    if (number === 0) return 'zero';

    if (number < 20) {
        return (numbers[number]).trim();
    };

    if (numberString.length === 2) {
        return (tenners[numberString[0]] + ' ' + numbers[numberString[1]]).trim();
    };

    if (numberString.length === 3) {
        if (numberString[1] === '0' && numberString[2] === '0')
            return (numbers[numberString[0]] + ' hundred').trim();
        else
            return (numbers[numberString[0]] + ' hundred ' + toReadable(+(numberString[1] + numberString[2]))).trim();
    }

}  
