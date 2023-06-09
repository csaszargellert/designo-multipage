import styled from "styled-components";
import { Link } from "react-router-dom";

const CTASection = styled.section`
  color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7.2rem 9.6rem;
  background-color: var(--peach);
  background-image: url("/assets/shared/desktop/bg-pattern-call-to-action.svg");
  background-repeat: no-repeat;
  background-position: center right;
  border-radius: var(--border-radius);

  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -75%);

  width: 110rem;

  h3 {
    font-weight: 500;
    font-size: 4rem;
    width: 12ch;
    line-height: 1;
    margin-bottom: 1.2rem;
  }

  p {
    width: 45ch;
  }

  a:link,
  a:visited {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 500;
    font-family: inherit;
    letter-spacing: 1px;
    border-radius: 8px;
    padding: 1.6rem 1.8rem;
    background-color: var(--white);
    color: var(--dark-grey);
    transition: all 150ms ease-in-out;
    text-decoration: none;
  }

  a:hover,
  a:active {
    color: var(--white);
    background-color: var(--light-peach);
  }

  @media (max-width: 75em) {
    width: 90%;
  }

  @media (max-width: 62.5em) {
    flex-direction: column;
    gap: 3.6rem;

    div {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h3 {
      margin-bottom: 1.8rem;
    }
  }

  @media (max-width: 46.875em) {
    transform: translate(-50%, -50%);

    h3 {
      width: 100%;
    }

    p {
      width: 100%;
    }
  }

  @media (max-width: 31.5625em) {
    padding: 6.4rem 2.4rem;
  }
`;

function CallToAction() {
  return (
    <CTASection>
      <div>
        <h3>Let&lsquo;s talk about your project</h3>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Link to="/contact">get in touch</Link>
    </CTASection>
  );
}

export default CallToAction;
