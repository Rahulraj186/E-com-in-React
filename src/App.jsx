import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Store } from "./Pages/Store";

import Header from "./Components/Header";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  return (
    <ShoppingCartProvider>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Store" element={<Store />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
};

export default App;
