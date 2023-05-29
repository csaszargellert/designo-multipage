import styled from "styled-components";

const Hero = styled.section`
  padding: 6.4rem 19rem;
  width: var(--width);
  margin: 0 auto 16rem;
  border-radius: var(--border-radius);

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: var(--white);
  background-color: var(--peach);
  background-image: url("/assets/${(props) =>
    props.$folder}/desktop/bg-pattern-intro-${(props) => props.$svg}.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  h1 {
    font-weight: 500;
    font-size: 4.8rem;
    line-height: 1;
    text-transform: capitalize;
  }

  p {
    width: 40ch;
  }
`;

function DesignHero({ name, title }) {
  const pageName = name.replace("-", " ");

  return (
    <Hero $folder={name} $svg={pageName.split(" ")[0]}>
      <h1>{pageName}</h1>
      <p>{title}</p>
    </Hero>
  );
}

export default DesignHero;
