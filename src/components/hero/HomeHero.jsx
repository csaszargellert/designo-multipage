import styled from "styled-components";

const Hero = styled.section`
  background-color: var(--peach);
  background-image: url("/assets/home/desktop/bg-pattern-hero-home.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center right;

  padding-left: 9.4rem;
  border-radius: var(--border-radius);
  color: var(--white);

  overflow: hidden;
  display: flex;
  justify-content: space-between;

  margin: 0 auto 10rem;
  width: 110rem;

  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .image-container {
    height: 64rem;
    width: 54%;
  }

  img {
    display: flex;
  }

  h2 {
    font-weight: 500;
    font-size: 4.8rem;
    line-height: 1;
    margin-bottom: 2rem;
    width: 120%;
  }

  p {
    margin-bottom: 4rem;
    width: 90%;
  }

  @media (max-width: 75em) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    padding: 6rem 9.4rem 0;

    h2 {
      width: 100%;
    }

    .content-container {
      width: 85%;
      text-align: center;
      align-items: center;
      margin-bottom: -10rem;
    }

    .image-container {
      height: auto;
      width: auto;
      pointer-events: none;
      margin-bottom: -34.5rem;
    }
  }

  @media (max-width: 62.5em) {
    .content-container {
      width: 100%;
    }
  }

  @media (max-width: 46.875em) {
    padding: 8rem 0 0;
    width: 100%;
    border-radius: 0;

    .content-container {
      width: 90%;
    }
  }

  @media (max-width: 34.375em) {
    h2 {
      font-size: 3.2rem;
    }

    p {
      width: 100%;
    }
  }
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;

  display: inline-block;
  padding: 1.8rem 2.6rem;

  font-family: inherit;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 1px;
  text-transform: uppercase;

  background-color: var(--white);
  color: var(--dark-grey);
  border-radius: 8px;
  cursor: pointer;
  transition: all 150ms ease-in-out;

  &:hover {
    color: var(--white);
    background-color: var(--light-peach);
  }
`;

function HomeHero({ onHandleScroll }) {
  return (
    <Hero>
      <div className="content-container">
        <h2>Award-winning custom designs and digital branding solutions</h2>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button onClick={onHandleScroll}>learn more</Button>
      </div>
      <div className="image-container">
        <img
          src="/assets/home/desktop/image-hero-phone.png"
          alt="Picture of a phone"
        />
      </div>
    </Hero>
  );
}

export default HomeHero;
