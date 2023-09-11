/*
Question:
Given a roman numeral, convert it to an integer.
Input is guaranteed to be within the range from 1 to 3999
E.g vii = 7 ,iv = 6 XC = 90 , MMXXIII = 2023 VVV = NaN
*/


function RomanNumeralsToInt(strRomanNumerals) {
    if (!strRomanNumerals) return 0;
    let result = 0;
    let map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);
    let arrRomanNumerals = strRomanNumerals.split('');
    for (let i = 0; i < arrRomanNumerals.length; i++) {
        let current = map.get(arrRomanNumerals[i]);
        let next = map.get(arrRomanNumerals[i + 1]);
        if (current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }
    
    return result;
}

export default RomanNumeralsToInt;