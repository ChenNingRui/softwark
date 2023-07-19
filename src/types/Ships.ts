import { SHIP_TYPES } from "./ShipType";

export type Ship = {
    name: SHIP_TYPES,
    size: number,
    point: number,
}

export const totalPoint = 17;

export const Ships: Ship[] = [
    {
        name: SHIP_TYPES.CARRIER,
        size: 5,
        point: 1,
    },
    {
        name: SHIP_TYPES.BATTLESHIP,
        size: 4,
        point: 1,
    },
    {
        name: SHIP_TYPES.DESTROYER,
        size: 3,
        point: 1,
    },
    {
        name: SHIP_TYPES.SUBMARINE,
        size: 3,
        point: 1,
    },
    {
        name: SHIP_TYPES.PATROLBOAT,
        size: 2,
        point: 1,
    },
]