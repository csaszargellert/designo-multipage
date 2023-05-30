import styled, { css } from "styled-components";
import { useContext } from "react";
import { HamburgerContext } from "../reducer/HamburgerReducer";

const HamburgerIcon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  display: none;

  span {
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #000;
    display: inline-block;
    transition: all 150ms ease-in-out;
    pointer-events: none;
  }

  span:nth-of-type(1) {
    top: 0;
    left: 0;
  }

  span:nth-of-type(2) {
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  span:nth-of-type(3) {
    bottom: 0;
    left: 0;
  }

  ${(props) => {
    return (
      props.$open &&
      css`
        span:nth-of-type(1) {
          top: 50%;
          transform: translateY(-50%) rotate(225deg);
        }

        span:nth-of-type(2) {
          transform: translateY(-50%) translateX(100%);
        }

        span:nth-of-type(3) {
          bottom: 50%;
          transform: translateY(50%) rotate(135deg);
        }
      `
    );
  }}

  @media (max-width: 46.875em) {
    display: ${(props) => !props.$footer && "block"};
  }
`;

function Hamburger({ footer }) {
  const { setOpen, open } = useContext(HamburgerContext);

  const handleMobileNavigation = function () {
    setOpen((prevValue) => !prevValue);
  };

  return (
    <HamburgerIcon
      onClick={handleMobileNavigation}
      $footer={footer}
      $open={open}
    >
      <span></span>
      <span></span>
      <span></span>
    </HamburgerIcon>
  );
}

export default Hamburger;
