import styled from "styled-components";
import React, { useEffect, useContext } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import { HamburgerContext } from "./reducer/HamburgerReducer";

import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Div = styled.div`
  position: relative;
`;

function App() {
  const { setOpen } = useContext(HamburgerContext);
  const { pathname } = useLocation();
  const page = pathname.slice(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
  }, [pathname, setOpen]);

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
