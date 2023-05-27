import styled from "styled-components";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";

import { Outlet } from "react-router-dom";

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Div>
        <CallToAction />
        <Footer />
      </Div>
    </React.Fragment>
  );
}

export default App;
