import { CELL_STATE } from '../types';
import { deployShip } from './deployShip';
import { initCells } from './initCells';

describe('test deployShip function', () => {
    test('deployShip return array with 100 cells', () => {
        expect(deployShip(initCells(), "A1", "A2").length).toBe(100);
    })

    test('A0 to A2 states are CELL_STATE.DEPLOYED', () => {
        const cells = deployShip(initCells(), "A0", "A2")
        expect(cells[0].state).toBe(CELL_STATE.DEPLOYED);
        expect(cells[1].state).toBe(CELL_STATE.DEPLOYED);
        expect(cells[2].state).toBe(CELL_STATE.DEPLOYED);
    })
})