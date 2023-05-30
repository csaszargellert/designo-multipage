import styled from "styled-components";

const Container = styled.div`
  max-width: var(--width);
  margin: 0 auto;

  @media (max-width: 75em) {
    width: 90%;
  }
`;

function StyledContainer({ children }) {
  return <Container>{children}</Container>;
}

export default StyledContainer;
