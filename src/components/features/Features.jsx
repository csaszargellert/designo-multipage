import styled from "styled-components";
import StyledContainer from "../../styles/StyledContainer";
import Feature from "./Feature";

const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));

  column-gap: 3.2rem;
  row-gap: 6.4rem;
  margin-bottom: 34rem;

  @media (max-width: 53.125em) {
    grid-template-columns: 1fr;
    row-gap: 0;
  }

  @media (max-width: 40.625em) {
    row-gap: 8rem;
  }
`;

function Features({ featuresData }) {
  return (
    <StyledContainer>
      <FeaturesSection>
        {featuresData &&
          featuresData.map((feature) => {
            return <Feature key={feature.id} {...feature} />;
          })}
      </FeaturesSection>
    </StyledContainer>
  );
}

export default Features;
