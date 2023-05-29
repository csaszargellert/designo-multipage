import Project from "./Project";
import styled from "styled-components";
import StyledContainer from "../../styles/StyledContainer";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 3rem;
`;

const Section = styled.section`
  margin-bottom: 16rem;
`;

function Projects({ projects }) {
  return (
    <Section>
      <StyledContainer>
        <List>
          {projects &&
            projects.map((project) => {
              return (
                <Project
                  key={project.id}
                  name={project.name}
                  image={project.image}
                  text={project.text}
                />
              );
            })}
        </List>
      </StyledContainer>
    </Section>
  );
}

export default Projects;
