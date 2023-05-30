import styled, { css } from "styled-components";

const Hero = styled.section`
  border-radius: var(--border-radius);
  overflow: hidden;
  background-color: var(--peach);
  background-image: url("/assets/about/desktop/bg-pattern-hero-about-desktop.svg");
  background-repeat: no-repeat;
  background-size: 57%;
  background-position: left bottom;

  display: flex;
  margin: 0 auto 16rem;
  width: 110rem;
  height: 48rem;

  color: var(--white);

  div:nth-child(1) {
    align-self: center;
    padding: 0 9rem;
  }

  h2 {
    font-weight: 500;
    font-size: 4.8rem;
    line-height: 1;
    margin-bottom: 3.2rem;
    text-transform: capitalize;
  }

  @media (max-width: 75em) {
    width: 90%;

    div:nth-child(1) {
      align-self: center;
      padding: 0 6.4rem;
    }
  }

  @media (max-width: 65.625em) {
    flex-direction: column;
    height: auto;

    div:nth-child(1) {
      text-align: center;
      padding: 6.4rem;
    }

    img {
      display: inline-block;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    div:nth-child(2) {
      order: -1;
      width: 100%;
      height: 32rem;
    }
  }

  @media (max-width: 46.875em) {
    width: 100%;
    margin: 0;
    border-radius: 0;
  }

  @media (max-width: 31.5625em) {
    div:nth-child(1) {
      padding: 6.4rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h2,
    p {
      width: 90%;
    }

    h2 {
      font-size: 3.2rem;
    }
  }
`;

const ModifiedHero = styled(Hero)`
  background-color: #fdf3f0;
  color: var(--dark-grey);
  height: 64rem;

  background-image: url("/assets/shared/desktop/bg-pattern-two-circles.svg");

  p:first-of-type {
    margin-bottom: 3.4rem;
  }

  h2 {
    font-size: 4rem;
    line-height: 1.2;
    color: var(--peach);
  }

  ${(props) => {
    return (
      props.$left &&
      css`
        background-position: 60% bottom;

        div:nth-child(2) {
          order: -1;
        }
      `
    );
  }}

  ${(props) => {
    return props.$last
      ? css`
          margin-bottom: 38rem;
          @media (max-width: 46.875em) {
            margin-bottom: 32rem;
          }
        `
      : css`
          @media (max-width: 46.875em) {
            margin-bottom: 12rem;
          }
        `;
  }}

  @media (max-width: 65.625em) {
    height: auto;
  }
`;

function ZPattern({ image, title, text, modified, leftImage, last }) {
  return (
    <>
      {modified ? (
        <ModifiedHero $left={leftImage} $last={last}>
          <div>
            <h2>{title}</h2>
            {text.map((phrase, index) => {
              return <p key={index}>{phrase}</p>;
            })}
          </div>

          <div>
            <picture>
              <source
                media="(max-width: 65.625em)"
                srcSet={`/assets/about/tablet/${image}`}
              />
              <source
                media="(max-width: 46.875em)"
                srcSet={`/assets/about/mobile/${image}`}
              />
              <img src={`/assets/about/desktop/${image}`} />
            </picture>
          </div>
        </ModifiedHero>
      ) : (
        <Hero>
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>

          <div>
            <picture>
              <source
                media="(max-width: 65.625em)"
                srcSet={`/assets/about/tablet/${image}`}
              />
              <source
                media="(max-width: 46.875em)"
                srcSet={`/assets/about/mobile/${image}`}
              />
              <img src={`/assets/about/desktop/${image}`} />
            </picture>
          </div>
        </Hero>
      )}
    </>
  );
}

export default ZPattern;
