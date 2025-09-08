import { Calculator } from './component';

describe('Calculator', () => {
    let component: Calculator;

    beforeEach(() => {
        component = new Calculator();
    });

    it('should add 1 & 2 to equal 3', () => {
        expect(component.add(1, 2)).toEqual(3);
    });

    it('should subtract 5 from 13 to equal 8', () => {
        expect(component.subtract(13, 5)).toEqual(8);
    })

    it('should sum [1, 2, 3, 4] to equal 10', () => {
        expect(component.sum([1, 2, 3, 4])).toEqual(10);
    })
});
