import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Home from "../src/components/Home/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
