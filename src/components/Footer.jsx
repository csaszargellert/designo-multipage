import styled from "styled-components";
import Header from "./Header";

const StyledFooter = styled.footer`
  padding: ${(props) => (props.$contactPage ? "7.2rem 0" : "14.4rem 0 7.2rem")};
  background-color: var(--black);
  color: var(--white);

  @media (max-width: 46.875em) {
    padding: ${(props) =>
      props.$contactPage ? "6.4rem 0" : "25.4rem 0 6.4rem"};
  }
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 110rem;
  margin: 0 auto;

  border-top: 1px solid var(--white);
  padding-top: 4rem;

  @media (max-width: 75em) {
    max-width: 90%;
  }

  @media (max-width: 46.875em) {
    border-top: none;
    padding-top: 0;

    flex-direction: column;
    align-items: center;
    gap: 4rem;
    text-align: center;
  }
`;

const ContactInfo = styled.p`
  opacity: 0.5;

  @media (max-width: 46.875em) {
    &:not(:last-of-type) {
      margin-bottom: 1.2rem;
    }
  }
`;

const Heading = styled(ContactInfo)`
  font-weight: 700;
  line-height: 1.3;
`;

const SocialMediaList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  align-self: flex-end;

  @media (max-width: 46.875em) {
    align-self: center;
  }
`;

const Icon = styled.svg`
  display: inline-block;
  width: 2.4rem;
  aspect-ratio: 1 / 1;

  use {
    transition: all 150ms ease-in-out;
    fill: var(--peach);
  }

  &:hover use {
    fill: var(--light-peach);
  }
`;

function Footer({ contactPage }) {
  return (
    <StyledFooter $contactPage={contactPage}>
      <Header footer={true} />
      <ContactContainer>
        <div>
          <Heading>Designo Central Office</Heading>
          <ContactInfo>3886 Wellington Street</ContactInfo>
          <ContactInfo>Toronto, Ontario M9C 3J5</ContactInfo>
        </div>
        <div>
          <Heading>Contact Us (Central Office)</Heading>
          <ContactInfo>P : +1 253-863-8967</ContactInfo>
          <ContactInfo>M : contact@designo.co</ContactInfo>
        </div>
        <SocialMediaList>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Icon>
                <use xlinkHref="/assets/symbol-defs.svg#icon-facebook2"></use>
              </Icon>
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <Icon>
                <use xlinkHref="/assets/symbol-defs.svg#icon-youtube"></use>
              </Icon>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Icon>
                <use xlinkHref="/assets/symbol-defs.svg#icon-twitter"></use>
              </Icon>
            </a>
          </li>
          <li>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">
              <Icon>
                <use xlinkHref="/assets/symbol-defs.svg#icon-pinterest"></use>
              </Icon>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Icon>
                <use xlinkHref="/assets/symbol-defs.svg#icon-instagram"></use>
              </Icon>
            </a>
          </li>
        </SocialMediaList>
      </ContactContainer>
    </StyledFooter>
  );
}

export default Footer;
