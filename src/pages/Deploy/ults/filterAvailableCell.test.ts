import { initCells } from "../../../ults/initCells";
import { filterAvailableCell } from "./filterAvailableCell";

describe('test filterAvailableCell function', () => {
    test('filterAvailableCell return array with 100 cells', () => {
        expect(filterAvailableCell(initCells()).length).toBe(100);
    })
})