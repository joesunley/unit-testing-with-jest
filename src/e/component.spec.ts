import { Engine, Status } from './component';

describe('Engine', () => {
    jest.spyOn(console, 'log').mockImplementation(() => null);
    let component: Engine;

    beforeEach(() => {
        component = new Engine();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    })

    it ('should set engine to "stopped" on creation', () => {
        expect(component.status).toEqual('stopped')
    })

    it ('should set engine to "started" on .start()', () => {
        component.start();
        expect(component.status).toEqual('started');
    })

    it ('should set engine to "stopped" after .start() and .stop()', () => {
        component.start();
        component.stop();
        expect(component.status).toEqual('stopped');
    })


});
