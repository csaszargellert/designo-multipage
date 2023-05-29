import styled from "styled-components";
import StyledContainer from "../../styles/StyledContainer";

const Hero = styled.section`
  margin-bottom: 16rem;
  padding: 5.4rem 9.4rem;
  border-radius: var(--border-radius);
  color: var(--white);
  background-color: var(--peach);
  background-image: url("/assets/contact/desktop/bg-pattern-hero-desktop.svg");
  background-repeat: no-repeat;
  background-position: left center;
  background-size: contain;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 9rem;

  h1 {
    font-weight: 500;
    font-size: 4.8rem;
    line-height: 1;
    margin-bottom: 3.2rem;
    text-transform: capitalize;
  }
`;

function ContactHero() {
  return (
    <StyledContainer>
      <Hero>
        <div>
          <h1>contact us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
      </Hero>
    </StyledContainer>
  );
}

export default ContactHero;
