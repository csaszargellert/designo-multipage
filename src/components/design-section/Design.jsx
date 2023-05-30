import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: background-color 150ms ease-in-out;
`;

const LinkButton = styled(Link)`
  ${(props) => {
    if (props.$bg.includes("large") && props.$page === "home") {
      return css`
        grid-column: 1 / 2;
        grid-row: 1 / -1;

        @media (max-width: 62.5em) {
          grid-column: 1;
          grid-row: 1;
        }
      `;
    } else if (props.$page === "home") {
      return css`
        grid-column: 2 / 3;

        @media (max-width: 62.5em) {
          grid-column: 1;
        }
      `;
    }
  }}

  color: var(--white);
  border-radius: var(--border-radius);
  background-image: url(${(props) => props.$bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.4rem;
  text-decoration: none;

  &:hover ${Overlay} {
    background-color: rgba(255, 173, 155, 0.6);
  }

  span {
    font-weight: 500;
    text-transform: uppercase;
    position: relative;
    z-index: 9;
  }

  span:nth-child(1) {
    font-size: 4rem;
    letter-spacing: 2px;
  }
  span:nth-child(2) {
    letter-spacing: 5px;
  }

  @media (max-width: 32.5625em) {
    span:nth-child(1) {
      font-size: 2.8rem;
    }
  }
`;

function Design({ name, image, page }) {
  let source = "";
  const { small, large } = image;

  if (large && page === "home") {
    source = large;
  } else {
    source = small;
  }

  const text = name.replace("-", " ");

  return (
    <LinkButton to={`/design/${name}`} $page={page} $bg={source}>
      <span>{text}</span>
      <span>
        view projects <img src="/assets/shared/desktop/icon-right-arrow.svg" />
      </span>
      <Overlay />
    </LinkButton>
  );
}

export default Design;
