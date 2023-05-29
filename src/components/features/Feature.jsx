import styled from "styled-components";
import ImageContainer from "../ImageContainer";

const StyledArticle = styled.article`
  color: var(--dark-grey);

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

function Feature({ image, title, text, id }) {
  return (
    <StyledArticle>
      <ImageContainer image={image} id={id} />
      <h3>{title}</h3>
      <p>{text}</p>
    </StyledArticle>
  );
}

export default Feature;
