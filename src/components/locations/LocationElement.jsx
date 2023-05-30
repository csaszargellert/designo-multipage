import styled, { css } from "styled-components";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Container = styled.div`
  display: flex;
  gap: 3rem;
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
      <Map center={[lat, lng]} zoom={12} zoomControl={false} $id={id}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]}></Marker>
      </Map>
    </Container>
  );
}

export default LocationElement;
