import LocationElement from "./LocationElement";
import styled from "styled-components";

const StyledSection = styled.section`
  width: var(--width);
  margin: 0 auto 38rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
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
