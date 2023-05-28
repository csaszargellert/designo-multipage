import styled, { css } from "styled-components";

const StyledArticle = styled.article`
  color: var(--dark-grey);

  img {
    ${(props) => {
      let rotateDeg = "";
      if (props.rotate === 2) {
        rotateDeg = props.rotate * 135 + "deg";
      } else {
        rotateDeg = props.rotate * 90 + "deg";
      }
      return css`
        transform: rotate(${rotateDeg});
      `;
    }}
  }

  h3 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 1.3;
    text-align: center;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 3.2rem;
  }

  p {
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 4.8rem;
  display: grid;
  place-items: center;

  background-image: url("/assets/shared/desktop/bg-pattern-small-circle.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

  ${(props) => {
    let rotateDeg = "";
    if (props.rotate === 2) {
      rotateDeg = -props.rotate * 135 + "deg";
    } else {
      rotateDeg = -props.rotate * 90 + "deg";
    }
    return css`
      transform: rotate(${rotateDeg});
    `;
  }}
`;

function Feature({ image, title, text, id }) {
  return (
    <StyledArticle rotate={id - 1}>
      <ImageContainer rotate={id - 1}>
        <img src={image} alt="illustration" />
      </ImageContainer>

      <h3>{title}</h3>

      <p>{text}</p>
    </StyledArticle>
  );
}

export default Feature;
