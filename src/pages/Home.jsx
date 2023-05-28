// import styled from "styled-components";
import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import Features from "../components/features/Features";
import { featuresData, designData } from "../data";
import Designs from "../components/design-section/Designs";
import HomeHero from "../components/hero/HomeHero";

export const loader = function () {
  return { data: featuresData };
};

function Home() {
  const { data } = useLoaderData();

  const sectionRef = useRef();

  const handleScroll = function () {
    const rect = sectionRef.current.getBoundingClientRect();

    const options = {
      behavior: "smooth",
      top: window.pageYOffset + rect.y,
      left: 0,
    };

    window.scrollTo(options);
  };

  return (
    <>
      <HomeHero onHandleScroll={handleScroll} />
      <Designs htmlReference={sectionRef} designData={designData} page="home" />
      <Features featuresData={data} />
    </>
  );
}

export default Home;
