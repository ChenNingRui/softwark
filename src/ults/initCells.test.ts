import { initCells } from './initCells';

describe('test initialCells function', () => {
    test('initCells return array with 100 cells', () => {
        expect(initCells().length).toBe(100);
    })
})