import { initSelectedItems } from "./initSelectedItems";


describe('test initSelectedPoints function', () => {
    test('initSelectedItems return array with 100 items', () => {
        expect(initSelectedItems().length).toBe(100);
    })

    test('first item is A0 and the last item is J9', () => {
        const items = initSelectedItems()
        expect(items[0]).toBe("A0");
        expect(items[99]).toBe("J9");
    })
})