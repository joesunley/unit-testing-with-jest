import { Car, Shop } from './component';

describe('Shop', () => {
    let component: Shop;

    beforeEach(() => {
        component = new Shop();
    });

    it('should add the expected order', () => {
        component.newOrder(mockCar(), 6000);
        
        const expected = { car: mockCar(), price: 6000 }

        expect(component.orders).toContainEqual(expect.objectContaining(expected));
    });

    function mockCar(): Car {
        return <Car>{
            make: 'Ford',
            model: 'Fiesta',
            year: 2014,
            mileage: 60000,
            color: 'red'
        }
    }
});
