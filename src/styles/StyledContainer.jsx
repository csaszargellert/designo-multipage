import styled from "styled-components";

const Container = styled.div`
  max-width: var(--width);
  margin: 0 auto;
`;

function StyledContainer({ children }) {
  return <Container>{children}</Container>;
}

export default StyledContainer;
