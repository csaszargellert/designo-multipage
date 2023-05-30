import styled, { css } from "styled-components";

const ImageContainer = styled.div`
  margin-bottom: 3.2rem;
  display: grid;
  place-items: center;

  background-image: url("/assets/shared/desktop/bg-pattern-small-circle.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

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

function ImageCon({ image, id }) {
  return (
    <ImageContainer rotate={id - 1}>
      <img src={image} alt="illustration" />
    </ImageContainer>
  );
}

export default ImageCon;
