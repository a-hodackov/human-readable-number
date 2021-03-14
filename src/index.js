module.exports = function toReadable(number) {
    const num = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty ",
        "thirty ",
        "forty ",
        "fifty ",
        "sixty ",
        "seventy ",
        "eighty ",
        "ninety ",
    ];
    const hundredsDigit = Math.floor(number / 100); //3
    let tensDigit = Math.floor((number - hundredsDigit * 100) / 10); //5
    let onesDigit = number - hundredsDigit * 100 - tensDigit * 10; //1
    if (number === 0) return "zero";
    if (tensDigit === 1) {
        tensDigit = 0;
        onesDigit = number - hundredsDigit * 100;
    }
    const hundreds = hundredsDigit ? num[hundredsDigit] + " hundred " : "";
    return (hundreds + tens[tensDigit] + num[onesDigit]).trim();
};
