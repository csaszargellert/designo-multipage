import Country from "./Country";
import styled from "styled-components";
import StyledContainer from "../styles/StyledContainer";

const countryData = [
  {
    id: 1,
    countryName: "Canada",
    image: "/assets/shared/desktop/illustration-canada.svg",
  },
  {
    id: 2,
    countryName: "Australia",
    image: "/assets/shared/desktop/illustration-australia.svg",
  },
  {
    id: 3,
    countryName: "United Kingdom",
    image: "/assets/shared/desktop/illustration-united-kingdom.svg",
  },
];

const CountrySection = styled.section`
  margin-bottom: 16rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1.6rem;
  }
`;

function Countries() {
  return (
    <CountrySection>
      <StyledContainer>
        <ul>
          {countryData.map((country) => {
            return <Country key={country.id} {...country} />;
          })}
        </ul>
      </StyledContainer>
    </CountrySection>
  );
}

export default Countries;
