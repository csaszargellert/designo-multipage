import styled from "styled-components";

import Feature from "./Feature";

const FeaturesSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;

  width: var(--width);
  margin: 0 auto 34rem;
`;

function Features({ featuresData }) {
  return (
    <FeaturesSection>
      {featuresData &&
        featuresData.map((feature) => {
          return <Feature key={feature.id} {...feature} />;
        })}
    </FeaturesSection>
  );
}

export default Features;
