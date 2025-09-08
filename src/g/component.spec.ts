import { ColumnHeader, ColumnHeaderParams, CustomColumnHeader } from './component';

describe('CustomColumnHeader', () => {
    let component: CustomColumnHeader;

    beforeEach(() => {
        component = new CustomColumnHeader();
    });

    it ('should return headerName', () => {
        component.init(mockParams());

        expect(component.displayName).toEqual('testHeader');
    })

    it ('should return undefined for headerName if params is undefined', () => {
        expect(component.displayName).toBeUndefined();
    })

    it ('should not be expanded by default if expandable', () => {
        component.init(mockParams());

        expect(component.isExpanded).toBeFalsy();
    })

    it ('should not be expanded by default if params is undefined', () => {
        expect(component.isExpanded).toBeFalsy();
    })

    it ('should be expanded after toggle', () => {
        component.init(mockParams());
        component.toggle();

        expect(component.isExpanded).toBeTruthy();
    })

    it ('should not be expanded after toggle if params is undefined', () => {
        component.toggle();

        expect(component.isExpanded).toBeFalsy();
    })

    function mockParams() {
        let isExpandable = true;
        let isExpanded = false;

        return <ColumnHeaderParams>{
            headerName: 'testHeader',
            api: {
                isExpandable: () => isExpandable,
                isExpanded: () => isExpandable ? isExpanded : false,
                setExpanded: (expanded: boolean) => isExpanded = expanded,
            }
        }
    }
});
