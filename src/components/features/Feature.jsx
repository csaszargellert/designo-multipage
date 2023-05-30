import styled from "styled-components";
import ImageContainer from "../ImageContainer";

const StyledArticle = styled.article`
  color: var(--dark-grey);

  div {
    text-align: center;
  }

  h3 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 1.3;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 3.2rem;
  }

  @media (max-width: 53.125em) {
    display: flex;
    gap: 4.8rem;
    align-items: center;

    div {
      text-align: left;
    }

    h3 {
      margin-bottom: 1.6rem;
    }
  }

  @media (max-width: 40.625em) {
    flex-direction: column;
    gap: 2.4rem;

    div {
      text-align: center;
    }
  }
`;

function Feature({ image, title, text, id }) {
  return (
    <StyledArticle>
      <ImageContainer image={image} id={id} />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </StyledArticle>
  );
}

export default Feature;
