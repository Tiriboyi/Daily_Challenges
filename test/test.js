import assert from 'assert';
import {MissingRange} from '../src/missingrange.js';


describe('MissingRange', () => {
    it('should handle an empty array', () => {
        const nums = [];
        const result = MissingRange(nums);
        const expected = ['0->99'];
        assert.deepStrictEqual(result, expected);
    });

    it('should handle a single missing number at the beginning', () => {
        const nums = [1, 2, 3, 4, 5, 10, 11, 12];
        const result = MissingRange(nums);
        const expected = ['0', '6->9', '13->99'];
        assert.deepStrictEqual(result, expected);
    });

    it('should handle a single missing number at the end', () => {
        const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const result = MissingRange(nums);
        const expected = ['11->99'];
        assert.deepStrictEqual(result, expected);
    });

    it('should handle multiple missing ranges', () => {
        const nums = [2, 5, 7, 10, 15, 20, 21];
        const result = MissingRange(nums);
        const expected = ['0->1', '3->4', '6', '8->9', '11->14', '16->19', '22->99'];
        assert.deepStrictEqual(result, expected);
    });

    it('should handle no missing ranges', () => {
        const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = MissingRange(nums);
        const expected = ['10->99'];
        assert.deepStrictEqual(result, expected);
    });
});
