import styled from "styled-components";
import ContactForm from "../forms/ContactForm";

const Hero = styled.section`
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

  width: 110rem;
  margin: 0 auto 16rem;

  h1 {
    font-weight: 500;
    font-size: 4.8rem;
    line-height: 1;
    margin-bottom: 3.2rem;
    text-transform: capitalize;
  }

  @media (max-width: 75em) {
    width: 90%;
  }

  @media (max-width: 65.625em) {
    padding: 8.6rem 9.4rem;
    flex-direction: column;

    & > div:first-child {
      width: 70%;
    }
  }

  @media (max-width: 56.25em) {
    padding: 8.6rem 12rem;

    & > div:first-child {
      width: 100%;
    }
  }

  @media (max-width: 46.875em) {
    width: 100%;
    border-radius: 0;
  }

  @media (max-width: 40.625em) {
    padding: 7.6rem 6rem;
  }

  @media (max-width: 31.5625em) {
    padding: 7.6rem 0;
    text-align: center;

    & > div:first-child {
      width: 90%;
    }

    h1 {
      font-size: 3.2rem;
    }
  }
`;

function ContactHero() {
  return (
    <Hero>
      <div>
        <h1>contact us</h1>
        <p>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <ContactForm />
    </Hero>
  );
}

export default ContactHero;
