import styled from "styled-components";

const Hero = styled.section`
  padding: 6.4rem;
  width: 110rem;
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

  @media (max-width: 75em) {
    width: 90%;
  }

  @media (max-width: 46.875em) {
    width: 100%;
    border-radius: 0;
    margin-bottom: 12rem;
  }

  @media (max-width: 31.5625em) {
    padding: 9rem 0;
    gap: 2.4rem;

    h1 {
      width: 90%;
      font-size: 3.2rem;
    }

    p {
      width: 90%;
    }
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
