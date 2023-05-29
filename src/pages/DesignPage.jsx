import { useParams } from "react-router-dom";
import { designData } from "../data";
import Designs from "../components/design-section/Designs";
import DesignHero from "../components/hero/DesignHero";
import Projects from "../components/projects/Projects";

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

  const { name, title, projects } = designToRender;

  return (
    <>
      <DesignHero name={name} title={title} />
      <Projects projects={projects} />
      <Designs designData={designDataToPassOn} page="design" />;
    </>
  );
}

export default DesignPage;
