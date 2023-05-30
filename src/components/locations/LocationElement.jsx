import styled, { css } from "styled-components";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Container = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 62.5em) {
    flex-direction: column;
  }

  @media (max-width: 46.875em) {
    gap: 0;
  }
`;

const Detail = styled.div`
  background-color: #fdf3f0;
  background-image: url("/assets/shared/desktop/bg-pattern-three-circles.svg");
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: left bottom;
  border-radius: var(--border-radius);
  overflow: hidden;
  padding: 0 9.6rem;
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-weight: 500;
    font-size: 4rem;
    line-height: 1.2;
    margin-bottom: 3.6rem;

    color: var(--peach);
  }

  .detail-container {
    display: flex;
    gap: 10rem;
    color: var(--dark-grey);
  }

  h3 {
    font-weight: 700;
    font-size: 1.6rem;
  }

  @media (max-width: 75em) {
    padding: 0 6.4rem;

    .detail-container {
      gap: 4.8rem;
    }
  }

  @media (max-width: 62.5em) {
    padding: 8.8rem 6.4rem;
  }

  @media (max-width: 46.875em) {
    border-radius: 0;
    align-items: center;

    .detail-container {
      flex-direction: column;
      text-align: center;
    }
  }

  @media (max-width: 31.5625em) {
    padding: 8rem 0;

    h2 {
      font-size: 3.2rem;
      text-align: center;
      width: 90%;
    }

    .detail-container {
      width: 90%;
    }
  }
`;

const Map = styled(MapContainer)`
  height: 32.6rem;
  width: 35rem;
  border-radius: var(--border-radius);

  ${(props) => {
    return (
      !(props.$id % 2) &&
      css`
        order: -1;
      `
    );
  }}

  @media (max-width: 62.5em) {
    width: 100%;
    order: -1;
  }
  @media (max-width: 46.875em) {
    border-radius: 0;
  }
`;

function LocationElement({ id, address, contact, countryName }) {
  const { phone, email } = contact;
  const {
    location,
    zip,
    city,
    street: { number, name },
  } = address;
  const { lat, lng } = location;

  return (
    <Container>
      <Detail>
        <h2>{countryName}</h2>
        <div className="detail-container">
          <div>
            <h3>Designo Office</h3>
            <p>
              {number} {name}
            </p>
            <p>
              {city} {zip}
            </p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>P : {phone}</p>
            <p>M : {email}</p>
          </div>
        </div>
      </Detail>
      <Map
        center={[lat, lng]}
        zoom={12}
        zoomControl={false}
        scrollWheelZoom={false}
        $id={id}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]}></Marker>
      </Map>
    </Container>
  );
}

export default LocationElement;
