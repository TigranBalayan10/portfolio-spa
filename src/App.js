import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <Router>
      <Header
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected ? (
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        ) : (
          <Contact />
        )}
      </main>
      <Footer />
    </Router>
  );
}

export default App;
