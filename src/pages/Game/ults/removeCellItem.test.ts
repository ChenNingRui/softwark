import { initSelectedItems } from "../../../ults/initSelectedItems";
import { removeCellItem } from "./removeCellItem";

describe('test removeCellItem function', () => {
    test('removeCellItem return one item', () => {
        const items = initSelectedItems()
        expect(items.length).toBe(100)
        const newItems = removeCellItem("A0", items)
        expect(newItems.length).toBe(99)
    })
})

