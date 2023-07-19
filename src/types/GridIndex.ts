export const colIndexs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
export const rowIndexs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const getColIndex = (char: string) => {
    return colIndexs.findIndex((col) => col === char)
}