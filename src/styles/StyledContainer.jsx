import styled from "styled-components";

const Container = styled.div`
  max-width: var(--width);
  margin: 0 auto;
`;

const GridContainer = styled(Container)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
`;

function StyledContainer({ children, parentGrid }) {
  let container;

  if (parentGrid) {
    container = <GridContainer>{children}</GridContainer>;
  } else {
    container = <Container>{children}</Container>;
  }

  return container;
}

export default StyledContainer;
