import React from "react";
import Home from "./Home";
import Service from "./Service";
import AboutUs from "./AboutUs";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "../components/footer/Footer";

function Index() {
  return (
    <main className="dark:bg-e3">
      <Home id="home" />
      <Service id="service" />
      <AboutUs id="aboutus" />
      <Testimonial id="testimonial" />
      <Contact id="contact" />
      <Footer id="footer" />
    </main>
  );
}

export default Index;
