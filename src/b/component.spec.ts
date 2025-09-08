import { Profile, User } from './component';

describe('Profile', () => {
    let component: Profile;

    beforeEach(() => {
        component = new Profile();
    });

    it('should correctly identify the user is an admin, when isAdmin: true', () => {
        component.user = <User>{ isAdmin: true };
        expect(component.isAdmin).toBeTruthy();
    });

    it('should correctly identify the user is not an admin, when isAdmin: false', () => {
        component.user = <User>{ isAdmin: false };
        expect(component.isAdmin).toBeFalsy();
    });

    it('should return undefined when user is undefined', () => {
        expect(component.isAdmin).toBeUndefined();
    });
});
