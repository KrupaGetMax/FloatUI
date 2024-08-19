import { useState } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Home from "./Components/Home/Home";
import Content from "./Components/Home/Content";
import Cards from "./Components/Home/Card";
import Footer from "./Components/Footer/Footer";
import Testimonials from "./Components/Testimonials/Testimonials";
import State from "./Components/State/State";
import Feature from "./Components/FeatureSection/Feature";
import FAQ from "./Components/FAQ/FAQ";
import Teams from "./Components/Teams/Teams";
import CTASection from "./Components/CTA/CTASection";
import ContactUs from "./Components/ContactUs/ContactUs";
import Client from "./Components/Clients/Client";
import Pricing from "./Components/Pricing/Pricing";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Blog from "./Components/Blog/Blog";
import AboutUs from "./Components/AboutUs/AboutUs";
function App() {
  return (
    <>
      <div className="absolute top-0   bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
        <Header />
        <Home />
        <Feature />
        <Content />
        <Cards />
        <Client />
        <CTASection />
        <Testimonials />
        <Teams />
        <State />
        <NewsLetter />
        <Blog />
        <Pricing />
        <ContactUs />
        <FAQ />
        <Footer />
        {/* <AboutUs /> */}
      </div>
      {/* <Header /> */}
    </>
  );
}

export default App;
