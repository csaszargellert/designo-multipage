import styled from "styled-components";

const ListItem = styled.li`
  border-radius: var(--border-radius);
  width: 100%;
  overflow: hidden;
  cursor: pointer;

  .image-container {
    height: 32rem;
    width: 100%;
  }

  img {
    display: inline-block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  figcaption {
    padding: 3.2rem;
    background-color: #fdf3f0;
    color: var(--dark-grey);
    text-align: center;
    transition: all 150ms ease-in-out;
  }

  &:hover figcaption {
    background-color: var(--peach);
    color: var(--white);
  }

  h3 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 1.3;
    letter-spacing: 5px;
    margin-bottom: 1.6rem;
    text-transform: uppercase;
  }

  @media (max-width: 46.875em) {
    figure {
      display: flex;
    }

    figcaption {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .image-container {
      height: 32rem;
      width: 50%;
    }
  }

  @media (max-width: 31.5625em) {
    figure {
      display: block;
    }

    figcaption {
      width: auto;
      display: block;
    }

    .image-container {
      height: 32rem;
      width: 100%;
    }
  }
`;

function Project({ name, image, text }) {
  return (
    <ListItem>
      <figure>
        <div className="image-container">
          <img src={image} alt={text} />
        </div>

        <figcaption>
          <h3>{name}</h3>
          <p>{text}</p>
        </figcaption>
      </figure>
    </ListItem>
  );
}

export default Project;
