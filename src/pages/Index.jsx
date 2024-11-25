import React from "react";
import Home from "./Home";
import Service from "./Service";
import AboutUs from "./AboutUs";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "../components/footer/Footer";

function Index() {
  return (
    <main>
      <Home />
      <Service />
      <AboutUs />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}

export default Index;
