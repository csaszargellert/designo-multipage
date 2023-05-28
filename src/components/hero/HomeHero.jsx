import styled from "styled-components";
import StyledContainer from "../../styles/StyledContainer";

const Hero = styled.section`
  --padding: 9.4rem;

  background-color: var(--peach);
  background-image: url("/assets/home/desktop/bg-pattern-hero-home.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center right;

  padding: 14rem var(--padding);
  border-radius: var(--border-radius);
  color: var(--white);

  overflow: hidden;
  position: relative;

  margin-bottom: 10rem;

  .content-container {
    width: 60%;
  }

  .image-container {
    position: absolute;
    right: -9rem;
    bottom: -25rem;
  }

  img {
    display: inline-block;
  }

  h2 {
    font-weight: 500;
    font-size: 4.8rem;
    line-height: 1;
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 4rem;
    width: 80%;
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
    <StyledContainer>
      <Hero>
        <div className="content-container">
          <h2>Award-winning custom designs and digital branding solutions</h2>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
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
    </StyledContainer>
  );
}

export default HomeHero;
