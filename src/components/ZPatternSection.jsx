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

  h1 {
    font-weight: 500;
    font-size: 4.8rem;
    line-height: 1;
    margin-bottom: 3.2rem;
    text-transform: capitalize;
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

  h1 {
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
    return (
      props.$last &&
      css`
        margin-bottom: 38rem;
      `
    );
  }}
`;

function ZPattern({ image, title, text, modified, leftImage, last }) {
  return (
    <>
      {modified ? (
        <ModifiedHero $left={leftImage} $last={last}>
          <div>
            <h1>{title}</h1>
            {text.map((phrase, index) => {
              return <p key={index}>{phrase}</p>;
            })}
          </div>

          <div>
            <img src={image} />
          </div>
        </ModifiedHero>
      ) : (
        <Hero>
          <div>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>

          <div>
            <img src={image} />
          </div>
        </Hero>
      )}
    </>
  );
}

export default ZPattern;
