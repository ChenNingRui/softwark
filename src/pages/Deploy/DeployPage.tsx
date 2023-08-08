import { Button, BUTTON_SIZE, Divider, Grid, Header } from "../../components";
import { StyledDeployWrapper, StyledWrapper } from "./DeployPage.styles";
import { useNavigate } from "react-router-dom";
import { colIndexs, rowIndexs } from "../../types";
import { DeployPanel } from "./organisms";
import { useDeloyStore } from "./store/useDeployStore";

export const DeployPage = () => {
  const navigate = useNavigate();
  const { cells, resetDeployPanel } = useDeloyStore();

  return (
    <StyledWrapper>
      <Header title="Deployed">
        <Button
          value="back"
          size={BUTTON_SIZE.S}
          onClick={() => {
            resetDeployPanel();
            navigate(-1);
          }}
        >
          Back
        </Button>
      </Header>
      <Divider />
      <StyledDeployWrapper>
        <Grid cells={cells} cols={colIndexs} rows={rowIndexs} />
        <DeployPanel />
      </StyledDeployWrapper>
    </StyledWrapper>
  );
};
