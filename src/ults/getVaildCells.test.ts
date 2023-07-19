import { SHIP_TYPES } from '../types';
import { getVaildCells } from './getVaildCells';
import { initCells } from './initCells';

describe('test getVaildCells function', () => {
    test('getVaildCells return array with E2, A4', () => {
        expect(getVaildCells(initCells(), SHIP_TYPES.BATTLESHIP, "A1").length).toBe(2);
    })

    test('getVaildCells return array with 3 cells', () => {
        expect(getVaildCells(initCells(), SHIP_TYPES.BATTLESHIP, "F0").length).toBe(3);
    })

    test('getVaildCells return array with 4 cells', () => {
        expect(getVaildCells(initCells(), SHIP_TYPES.BATTLESHIP, "F4").length).toBe(4);
    })
})