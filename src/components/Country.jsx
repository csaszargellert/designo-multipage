import ImageCon from "./ImageContainer";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CountryItem = styled.li`
  h3 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 1.3;
    text-align: center;
    letter-spacing: 5px;
    text-transform: uppercase;

    color: var(--dark-grey);
    margin-bottom: 3.2rem;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  font-family: inherit;
  font-weight: 500;
  font-size: 1.6rem;
  display: inline-block;
  padding: 1.8rem;
  text-decoration: none;
  color: var(--white);
  background-color: var(--peach);
  border-radius: 8px;

  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 150ms ease-in-out;

  &:hover {
    background-color: var(--light-peach);
  }
`;

function Country({ image, countryName, id }) {
  return (
    <CountryItem>
      <ImageCon image={image} id={id + 3} />
      <h3>{countryName}</h3>
      <div className="button-container">
        <StyledLink to="/locations">see location</StyledLink>
      </div>
    </CountryItem>
  );
}

export default Country;
