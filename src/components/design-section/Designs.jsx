import styled from "styled-components";
import Design from "./Design";
import StyledContainer from "../../styles/StyledContainer";

const HomePageDesign = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 30rem 30rem;
  gap: 2.4rem;
  margin-bottom: 16rem;
`;

const DesignPageSection = styled(HomePageDesign)`
  grid-template-rows: 30rem;
`;

function Designs({ designData, page, htmlReference }) {
  let htmlToRender = "";

  if (page === "home") {
    htmlToRender = (
      <HomePageDesign ref={htmlReference}>
        {designData &&
          designData.map((design) => {
            return (
              <Design
                key={design.id}
                name={design.name}
                image={design.image}
                page={page}
              />
            );
          })}
      </HomePageDesign>
    );
  } else {
    htmlToRender = (
      <DesignPageSection>
        {designData &&
          designData.map((design) => {
            return (
              <Design
                key={design.id}
                name={design.name}
                image={design.image}
                page={page}
              />
            );
          })}
      </DesignPageSection>
    );
  }

  return <StyledContainer>{htmlToRender}</StyledContainer>;
}

export default Designs;
