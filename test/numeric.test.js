import assert from 'assert';
import RomanNumeralsToInt from '../src/romannumeralstoint.js';


describe('Roman Numerals to Integer', () => {
    it('should handle an empty string', () => {
        const nums = '';
        const result = RomanNumeralsToInt(nums);
        const expected = 0;
        assert.deepStrictEqual(result, expected);
    });

    it('should handle invalid string', () => {
        const nums = 'vvv';
        const result = RomanNumeralsToInt(nums);
        const expected = NaN;
        assert.deepStrictEqual(result, expected);
    });

    it('should single value numeral', () => {
        const nums = "X";
        const result = RomanNumeralsToInt(nums);
        const expected = 10;
        assert.deepStrictEqual(result, expected);
    });

    it('should handle multiple numerals', () => {
        const nums = 'LX';
        const result = RomanNumeralsToInt(nums);
        const expected = 60;
        assert.deepStrictEqual(result, expected);
    });

    it('should handle thousand', () => {
        const nums = 'MMXXIII';
        const result = RomanNumeralsToInt(nums);
        const expected = 2023;
        assert.deepStrictEqual(result, expected);
    });
});
