import styled from "styled-components";
import Design from "./Design";
import StyledContainer from "../../styles/StyledContainer";

const HomePageDesign = styled.section`
  margin-bottom: ${(props) => (props.$margin ? "38rem" : "16rem")};

  .design-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 30rem 30rem;
    gap: 2.4rem;
  }

  @media (max-width: 62.5em) {
    margin-bottom: ${(props) => (props.$margin ? "38rem" : "12rem")};

    .design-container {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 30rem);
    }
  }

  @media (max-width: 31.5625em) {
    margin-bottom: ${(props) => (props.$margin ? "28.6rem" : "12rem")};
  }
`;

const DesignPageSection = styled(HomePageDesign)`
  .design-container {
    grid-template-rows: 30rem;
  }

  @media (max-width: 62.5em) {
    .design-container {
      grid-template-rows: 30rem 30rem;
    }
  }
`;

function Designs({ designData, page, htmlReference }) {
  let htmlToRender = "";

  if (page === "home") {
    htmlToRender = (
      <HomePageDesign ref={htmlReference}>
        <StyledContainer>
          <div className="design-container">
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
          </div>
        </StyledContainer>
      </HomePageDesign>
    );
  } else {
    htmlToRender = (
      <DesignPageSection $margin>
        <StyledContainer>
          <div className="design-container">
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
          </div>
        </StyledContainer>
      </DesignPageSection>
    );
  }

  return htmlToRender;
}

export default Designs;
