import LocationElement from "./LocationElement";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 110rem;
  margin: 0 auto 38rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 75em) {
    width: 90%;
    gap: 12rem;
  }

  @media (max-width: 46.875em) {
    width: 100%;
    gap: 4rem;
  }

  @media (max-width: 46.875em) {
    margin-bottom: 32rem;
  }
`;

function Locations({ data }) {
  return (
    <StyledSection>
      {data.map((country) => {
        return (
          <LocationElement
            key={country.id}
            id={country.id}
            address={country.address}
            contact={country.contact}
            countryName={country.countryName}
          />
        );
      })}
    </StyledSection>
  );
}

export default Locations;
