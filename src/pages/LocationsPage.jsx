import { countryData } from "../data";
import Locations from "../components/locations/Locations";

function LocationsPage() {
  return <Locations data={countryData} />;
}

export default LocationsPage;
