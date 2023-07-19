import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { Button, BUTTON_SIZE, Dropdown } from "../../../../components";
import { deployShip } from "../../../../ults/deployShip";
import { useDeloyStore } from "../../store/useDeployStore";
import { filterAvailableCell } from "../../ults/filterAvailableCell";
import { getVaildCells } from "../../../../ults/getVaildCells";
import { StyledWrapper } from "./DeployPanel.styles";

export const DeployPanel = () => {
    const navigate = useNavigate();

    const {
        cells,
        setCells,
        shipName,
        setShipName,
        startPoint,
        setStartPoint,
        endPoint,
        setEndPoint,
        shipItems,
        startPointItems,
        setStartPointItems,
        endPointItems,
        setEndPointItems,
        setDeployPanel,
        resetDeployPanel,
    } = useDeloyStore()

    //initial parameters
    useEffect(() => {
        resetDeployPanel()
    }, [resetDeployPanel])

    useEffect(() => {
        setStartPointItems(filterAvailableCell(cells))
    }, [cells, setStartPointItems])


    return (
        <StyledWrapper>
            <Dropdown selected={shipName}
                header="ship"
                menuItems={shipItems}
                onSelect={(value: string) =>
                    setShipName(value)
                } />
            <Dropdown selected={startPoint}
                header="start point"
                menuItems={startPointItems}
                onSelect={(value: string) => {
                    setStartPoint(value)
                    const endPointCells = getVaildCells(cells, shipName, value)
                    setEndPointItems(endPointCells ? endPointCells.map((cell) => cell.key) : [])
                    setEndPoint("")
                }
                } />
            <Dropdown selected={endPoint}
                header="end point"
                menuItems={endPointItems ? endPointItems : []}
                onSelect={(value: string) =>
                    setEndPoint(value)
                } />
            <Button size={BUTTON_SIZE.S}
                disabled={endPoint === ""}
                onClick={() => {
                    setCells(deployShip(cells, startPoint, endPoint))
                    setDeployPanel()
                }}>Confirm</Button>
            <Button size={BUTTON_SIZE.S}
                disabled={shipItems.length !== 0}
                onClick={() => {
                    navigate("/game")
                }}>Start</Button>
        </StyledWrapper>
    )
}