import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import StyledContainer from "../styles/StyledContainer";

const HeaderEl = styled.header`
  ${(props) => {
    return props.$footer
      ? css`
          border-bottom: 1px solid var(--white);
          padding-bottom: 4rem;
          color: var(--white);
          margin-bottom: 3.6rem;
        `
      : css`
          padding: 6.4rem 0;
          color: var(--dark-grey);
        `;
  }}
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 400;
  font-size: 1.4rem;
  text-decoration: none;
  letter-spacing: 2px;
  color: inherit;

  ${(props) => {
    return (
      props.$margin &&
      css`
        margin-right: auto;
      `
    );
  }}

  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img.attrs((props) => ({
  src: props.$footer
    ? "/assets/shared/desktop/logo-light.png"
    : "/assets/shared/desktop/logo-dark.png",
  alt: "Company Logo",
}))`
  display: inline-block;
  width: 19.6rem;
  height: 2.4rem;
`;

const StyledListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
`;

function Header({ footer }) {
  return (
    <HeaderEl $footer={footer}>
      <StyledContainer>
        <Navigation>
          <StyledLink to="/" $margin>
            <Image $footer={footer} />
          </StyledLink>
          <StyledListContainer>
            <li>
              <StyledLink to="about">our company</StyledLink>
            </li>
            <li>
              <StyledLink to="locations">locations</StyledLink>
            </li>
            <li>
              <StyledLink to="contact">contact</StyledLink>
            </li>
          </StyledListContainer>
        </Navigation>
      </StyledContainer>
    </HeaderEl>
  );
}

export default Header;
