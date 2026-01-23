function inToRoman(num) {
    let romanStr = '';
    let romanObj = {
        M: 1000, CM: 900, D: 500, CD: 400,
        C: 100, XC: 90, L: 50, XL: 40,
        X: 10, IX: 9, V: 5, IV: 4, I: 1
    }
    for (key in romanObj) {
        let valueFromRomanObj = romanObj[key];
        while (num >= valueFromRomanObj) {
            romanStr = romanStr + key;
            num = num - valueFromRomanObj;
        }
    }
    return romanStr;
}
console.log(inToRoman(12)); // XII
console.log(inToRoman(9)); // IX