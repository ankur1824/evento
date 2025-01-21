import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import Services from "./component/Services";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import BookNow from "./component/BookNow";  // Import BookNow component

const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Services />
      <BookNow />
      <About />
      <Contact />
       {/* Add the BookNow section here */}
      <Footer />
      <Toaster />
    </Router>
  );
};

export default App;
