import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "../../components/container/Container";
import Portfolio from "../../pages/Portfolio";

const Routers = () => {
  return (
    <Container>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Container>
  );
};

export default Routers;
