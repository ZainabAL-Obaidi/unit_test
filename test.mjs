import { expect } from 'chai';
import { calculate } from './calculator.mjs';

describe('Calculator Tests', function() {
    it('should evaluate 3+6*2 correctly', function() {
        const result = calculate('3+6*2');
        expect(result).to.equal(15);
    });

    it('should evaluate (3+6)*2 correctly', function() {
        const result = calculate('(3+6)*2');
        expect(result).to.equal(18);
    });

    it('should evaluate (2+3)*(5-2) correctly', function() {
        const result = calculate('(2+3)*(5-2)');
        expect(result).to.equal(15);
    });

    it('should evaluate 2*(3+5)/4 correctly', function() {
        const result = calculate('2*(3+5)/4');
        expect(result).to.equal(4);
    });

    it('should evaluate ((2+3)*2-5)/5 correctly', function() {
        const result = calculate('((2+3)*2-5)/5');
        expect(result).to.equal(1);
    });

    it('should evaluate (2*(3+(4*5))) correctly', function() {
        const result = calculate('(2*(3+(4*5)))');
        expect(result).to.equal(46);
    });

    it('should return error message for invalid expression', function() {
        const result = calculate('2*3+');
        expect(result).to.equal('Ungültiger Ausdruck');
    });
    it('should return error message for invalid expression', function() {
        const result = calculate('2/0+3');
        expect(result).to.equal('Ungültiger Ausdruck');
    });
});
