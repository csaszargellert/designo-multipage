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

  grid-column: 1 / 1;
  grid-row: 1 / 1;

  width: var(--width);
  transform: translate(19%, -95%);

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
