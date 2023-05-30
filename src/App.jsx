import styled from "styled-components";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";

import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  position: relative;
`;

function App() {
  const { pathname } = useLocation();
  const page = pathname.slice(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      {page === "contact" ? (
        <Div>
          <Footer contactPage />
        </Div>
      ) : (
        <Div>
          <CallToAction />
          <Footer />
        </Div>
      )}
    </React.Fragment>
  );
}

export default App;
