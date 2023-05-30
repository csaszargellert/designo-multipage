import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import StyledContainer from "../styles/StyledContainer";
import Hamburger from "./Hamburger";
import MobileNavigation from "./MobileNavigation";
import Overlay from "./Overlay";
import { HamburgerContext } from "../reducer/HamburgerReducer";
import { useContext, useRef, useEffect, useState } from "react";

const HeaderEl = styled.header`
  ${(props) => {
    return props.$footer
      ? css`
          color: var(--white);
          margin-bottom: 3.6rem;

          @media (max-width: 46.875em) {
            border-bottom: none;
          }
        `
      : css`
          padding: 6.4rem 0;
          position: relative;
          color: var(--dark-grey);

          @media (max-width: 46.875em) {
            padding: 3.4rem 0;
          }
        `;
  }}
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;

  ${(props) => {
    return (
      props.$footer &&
      css`
        @media (max-width: 46.875em) {
          flex-direction: column;
          align-items: stretch;
        }
      `
    );
  }}
`;

export const StyledLink = styled(Link)`
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 400;
  font-size: ${(props) => (props.$big ? "2.4rem" : "1.4rem")};
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

  ${(props) => {
    return (
      props.$footer &&
      css`
        @media (max-width: 46.875em) {
          align-self: center;
          margin-right: 0;
        }
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

  ${(props) => {
    return props.$footer
      ? css`
          @media (max-width: 46.875em) {
            padding-top: 3.2rem;
            border-top: 1px solid var(--white);
            margin-top: 3.2rem;

            flex-direction: column;
          }
        `
      : css`
          @media (max-width: 46.875em) {
            display: none;
          }
        `;
  }}
`;

function Header({ footer }) {
  const { open } = useContext(HamburgerContext);
  const [headerHeight, setHeaderHeight] = useState(0);

  const headerRef = useRef(null);

  useEffect(() => {
    const headerAttr = headerRef.current.getBoundingClientRect();

    if (headerAttr.y === 0) {
      setHeaderHeight(headerAttr.height);
    }
  }, []);

  return (
    <HeaderEl $footer={footer} ref={headerRef}>
      <StyledContainer>
        <Navigation $footer={footer}>
          <StyledLink to="/" $margin $footer={footer}>
            <Image $footer={footer} />
          </StyledLink>
          <StyledListContainer $footer={footer}>
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
          <Hamburger footer={footer} />
        </Navigation>
      </StyledContainer>
      {open && (
        <>
          <Overlay headerHeight={headerHeight} footer={footer} />
          <MobileNavigation open={open} footer={footer} />
        </>
      )}
    </HeaderEl>
  );
}

export default Header;
