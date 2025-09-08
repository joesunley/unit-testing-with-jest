import { SimpleBank } from './component';

describe('SimpleBank', () => {
    let component: SimpleBank;

    beforeEach(() => {
        component = new SimpleBank();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should throw if deposit is < 0', () => {
        expect(() => component.deposit(-1)).toThrow();
    })

    it('should throw if deposit is = 0', () => {
        expect(() => component.deposit(0)).toThrow();
    })

    it('should not throw if deposit is > 0', () => {
        expect(() => component.deposit(1)).not.toThrow();
    })

    it ('should throw if withdraw is <= 0', () => {
        expect(() => component.withdraw(-1)).toThrow();
    })

    it ('should throw if withdraw is = 0', () => {
        expect(() => component.withdraw(0)).toThrow();
    })

    it ('should not throw if withdraw is > 0', () => {
        expect(() => component.withdraw(1)).not.toThrow();
    })

    it ('should increase balance by 50 to 50', () => {
        component.deposit(50);

        expect(component.balance).toEqual(50);
    })

    it ('should decrease balance by 50 to -50', () => {
        component.withdraw(50);

        expect(component.balance).toEqual(-50);
    })
});
