import styled from "styled-components";
import { StyledLink } from "./Header";
import StyledContainer from "../styles/StyledContainer";

const Navigation = styled.div`
  display: none;
  background-color: var(--black);
  color: var(--white);
  position: absolute;
  z-index: 9999;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: translateY(100%);

  padding: 4.8rem 0;
  height: ${(props) => (props.$open ? "auto" : "0")};

  overflow: hidden;

  ul {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  @media (max-width: 46.875em) {
    display: ${(props) => !props.$footer && "block"};
  }
`;

function MobileNavigation({ open, footer }) {
  return (
    <Navigation $open={open} $footer={footer}>
      <StyledContainer>
        <ul>
          <li>
            <StyledLink $big to="/about">
              our company
            </StyledLink>
          </li>
          <li>
            <StyledLink $big to="/locations">
              locations
            </StyledLink>
          </li>
          <li>
            <StyledLink $big to="/contact">
              contact
            </StyledLink>
          </li>
        </ul>
      </StyledContainer>
    </Navigation>
  );
}

export default MobileNavigation;
