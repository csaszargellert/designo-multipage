import styled, { css } from "styled-components";
import ReactDOM from "react-dom";
import { useContext } from "react";
import { HamburgerContext } from "../reducer/HamburgerReducer";

const OverlayDiv = styled.div`
  display: none;

  position: absolute;
  z-index: 999;
  min-height: 100vh;
  width: 100%;
  top: ${(props) => `${props.$headerHeight}px`};
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);

  @media (max-width: 46.875em) {
    display: ${(props) => !props.$footer && "block"};
  }
`;

function Overlay({ headerHeight, footer }) {
  const { setOpen } = useContext(HamburgerContext);

  return ReactDOM.createPortal(
    <OverlayDiv
      onClick={() => setOpen(false)}
      $headerHeight={headerHeight}
      $footer={footer}
    />,
    document.querySelector("#overlay")
  );
}

export default Overlay;
