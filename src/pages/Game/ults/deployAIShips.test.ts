import { CELL_STATE, Ships, totalPoint } from "../../../types";
import { deployAIShips } from "./deployAIShips";

describe('test deployAIShips function', () => {
    test('deployAIShips return a cell with length equal to 17', () => {
        const cells = deployAIShips(Ships)
        const deployCells = cells.filter((cell) =>
            cell.state === CELL_STATE.DEPLOYED
        )
        expect(deployCells.length).toBe(totalPoint)
    })
})

