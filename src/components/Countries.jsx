import Country from "./Country";
import styled from "styled-components";
import StyledContainer from "../styles/StyledContainer";
import { countryData } from "../data";

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
            return (
              <Country
                key={country.id}
                id={country.id}
                image={country.image}
                countryName={country.countryName}
              />
            );
          })}
        </ul>
      </StyledContainer>
    </CountrySection>
  );
}

export default Countries;
