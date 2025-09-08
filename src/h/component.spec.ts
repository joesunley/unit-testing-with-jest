import { toNamespacedPath } from 'path';
import { AccountService, UserPortal } from './component';

describe('UserPortal', () => {
    let component: UserPortal;
    let accountService: Partial<AccountService>;

    beforeEach(() => {
        accountService = mockAccountService();
        component = new UserPortal(<AccountService>accountService);
    });

    it('should return the expected user', () => {
        expect(component.user).toEqual(mockAccountService().user);
    });

    it('should attempt to login user "foo"', () => {
        component.login();
        expect(accountService.doLogin).toHaveBeenCalledWith('foo');
    })

    it ('should attempt to logout', () => {
        component.logout();
        expect(accountService.doLogout).toHaveBeenCalled();
    })


    function mockAccountService(): Partial<AccountService> {
        return {
            user: {
                id: 'foo',
                name: 'bar'
            },

            doLogin: jest.fn(),
            doLogout: jest.fn()
        }
    }
});

describe('AccountService', () => {
    let service: AccountService;

    beforeEach(() => {
        service = new AccountService();
    });

    it ('should return undefined for initial user', () => {
        expect(service.user).toBeUndefined();
    })

    it ('should set user tp { "bar", "foo" }', () => {
        service.doLogin('bar');

        expect(service.user).toEqual({id: 'bar', name: 'foo'});
    })
    
    it ('should clear user if user exists', () => {
        service.doLogin('bar');
        service.doLogout();

        expect(service.user).toBeUndefined();
    })

    it ('should have undefined user if none exists', () => {
        service.doLogout();

        expect(service.user).toBeUndefined();
    })
});
