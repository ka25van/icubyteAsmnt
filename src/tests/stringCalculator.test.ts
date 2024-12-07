import { add } from '../stringCalculator';

describe('String Calculator', () => {
    test('return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('return the number for a single number', () => {
        expect(add("1")).toBe(1);
    });

    test('return the sum for two numbers', () => {
        expect(add("1,5")).toBe(6);
    });

    test('return new lines between numbers also add them', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('throw an error for negative numbers', () => {
        expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    });

    test('throw an error for multiple negative numbers', () => {
        expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
    });

    test('custom delimiters', () => {
        expect(add("//;\n1;2")).toBe(3);
    });
});