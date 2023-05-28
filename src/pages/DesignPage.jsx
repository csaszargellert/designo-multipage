import { useParams } from "react-router-dom";
import { designData } from "../data";
import Designs from "../components/design-section/Designs";

function DesignPage() {
  const { designId } = useParams();
  const designDataToPassOn = [];

  const designToRender = designData.filter((design) => {
    if (design.name === designId) {
      return true;
    } else {
      const obj = {
        id: design.id,
        name: design.name,
        image: design.image,
      };

      designDataToPassOn.push(obj);
    }
  })[0];

  return <Designs designData={designDataToPassOn} page="design" />;
}

export default DesignPage;
