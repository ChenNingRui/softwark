import { CELL_STATE } from "../../../types";
import { initCells } from "../../../ults/initCells";
import { attackShip } from "./attackShip";

describe('test attackShip function', () => {
    test('attackShip return A0 with state equal to CELL_STATE.MISS', () => {
        const { cells, hasHit } = attackShip("A0", initCells())
        expect(cells[0].state).toBe(CELL_STATE.MISS)
        expect(hasHit).toBe(false)
    })
})