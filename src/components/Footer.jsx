import styled from "styled-components";
import Header from "./Header";
import StyledContainer from "../styles/StyledContainer";

const StyledFooter = styled.footer`
  padding: 14.4rem 0 7.2rem;
  background-color: var(--black);
  color: var(--white);
  grid-column: 1;
  grid-row: 1;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const ContactInfo = styled.p`
  opacity: 0.5;
`;

const Heading = styled(ContactInfo)`
  font-weight: 700;
  line-height: 1.3;
`;

const SocialMediaList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.6rem;
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

function Footer() {
  return (
    <StyledFooter>
      <StyledContainer>
        <Header footer={true} />
        <ContactContainer>
          <div>
            <Heading>Designo Central Office</Heading>
            <ContactInfo>3886 Wellington Street</ContactInfo>
            <ContactInfo>Toronto, Ontario M9C 3J5</ContactInfo>
          </div>
          <div>
            <Heading>Contact Us (Central Office)</Heading>
            <Heading>P : +1 253-863-8967</Heading>
            <Heading>M : contact@designo.co</Heading>
          </div>
          <SocialMediaList>
            <li>
              <a href="https://facebook.com">
                <Icon>
                  <use xlinkHref="/assets/symbol-defs.svg#icon-facebook2"></use>
                </Icon>
              </a>
            </li>
            <li>
              <a href="https://youtube.com">
                <Icon>
                  <use xlinkHref="/assets/symbol-defs.svg#icon-youtube"></use>
                </Icon>
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <Icon>
                  <use xlinkHref="/assets/symbol-defs.svg#icon-twitter"></use>
                </Icon>
              </a>
            </li>
            <li>
              <a href="https://pinterest.com">
                <Icon>
                  <use xlinkHref="/assets/symbol-defs.svg#icon-pinterest"></use>
                </Icon>
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <Icon>
                  <use xlinkHref="/assets/symbol-defs.svg#icon-instagram"></use>
                </Icon>
              </a>
            </li>
          </SocialMediaList>
        </ContactContainer>
      </StyledContainer>
    </StyledFooter>
  );
}

export default Footer;
