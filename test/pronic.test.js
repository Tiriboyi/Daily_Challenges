import assert from 'assert';
import isHeteromecic from '../src/pronic.js';


describe('Pronic Test', () => {
    it('should handle 0', () => {
        const result = isHeteromecic(0);
        const expected = true;
        assert.deepStrictEqual(result, expected);
    });

    it('Testing 1 should return false', () => {
        const result = isHeteromecic(1);
        const expected = false;
        assert.deepStrictEqual(result, expected);
    });

    it('Testing 2 should return true', () => {
        const result = isHeteromecic(2);
        const expected = true;
        assert.deepStrictEqual(result, expected);
    });

    it('Testing 7 should return false', () => {
        const result = isHeteromecic(7);
        const expected = false;
        assert.deepStrictEqual(result, expected);
    });

    it('Testing 42 should return true', () => {
        const result = isHeteromecic(42);
        const expected = true;
        assert.deepStrictEqual(result, expected);
    });

    it('Testing 56 should return true', () => {
        const result = isHeteromecic(56);
        const expected = true;
        assert.deepStrictEqual(result, expected);
    });

    it('Testing 136 should return false', () => {
        const result = isHeteromecic(136);
        const expected = false;
        assert.deepStrictEqual(result, expected);
    });

    it('Testing 156 should return true', () => {
        const result = isHeteromecic(156);
        const expected = true;
        assert.deepStrictEqual(result, expected);
    });

    it('Testing 306 should return true', () => {
        const result = isHeteromecic(306);
        const expected = true;
        assert.deepStrictEqual(result, expected);
    });

    it('Testing 999000 should return true', () => {
        const result = isHeteromecic(999000);
        const expected = true;
        assert.deepStrictEqual(result, expected);
    });
});
