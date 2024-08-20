// import { useState } from "react";
// import Header from "./Components/Header/Header";
// import "./App.css";
// import Home from "./Components/Home/Home";
// import Content from "./Components/Home/Content";
// import Cards from "./Components/Home/Card";
// import Footer from "./Components/Footer/Footer";
// import Testimonials from "./Components/Testimonials/Testimonials";
// import State from "./Components/State/State";
// import Feature from "./Components/FeatureSection/Feature";
// import FAQ from "./Components/FAQ/FAQ";
// import Teams from "./Components/Teams/Teams";
// import CTASection from "./Components/CTA/CTASection";
// import ContactUs from "./Components/ContactUs/ContactUs";
// import Client from "./Components/Clients/Client";
// import Pricing from "./Components/Pricing/Pricing";
// import NewsLetter from "./Components/NewsLetter/NewsLetter";
// import Blog from "./Components/Blog/Blog";
// import AboutUs from "./Components/AboutUs/AboutUs";
// import Portfolio from "./Components/Portfolio/Portfolio";
// import Branding from "./Components/Why/Branding";
// import NewCard from "./Components/Why/NewCard";
// function App() {
//   return (
//     <>
//       <div className="absolute top-0   bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
//         <Header />
//         <Home />
//         <Feature />
//         <Content />
//         <Cards />
//         <Client />
//         <CTASection />
//         <Testimonials />
//         <Teams />
//         <State />
//         <NewsLetter />
//         <Blog />
//         <Portfolio />
//         <Branding />
//         <NewCard />
//         <Pricing />
//         <ContactUs />
//         <FAQ />
//         <Footer />
//         {/* <AboutUs /> */}
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Feature from "./Components/FeatureSection/Feature";
import Content from "./Components/Home/Content";
import Cards from "./Components/Home/Card";
import Client from "./Components/Clients/Client";
import CTASection from "./Components/CTA/CTASection";
import Testimonials from "./Components/Testimonials/Testimonials";
import Teams from "./Components/Teams/Teams";
import State from "./Components/State/State";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Blog from "./Components/Blog/Blog";
import Portfolio from "./Components/Portfolio/Portfolio";
import Branding from "./Components/Why/Branding";
import NewCard from "./Components/Why/NewCard";
import Pricing from "./Components/Pricing/Pricing";
import ContactUs from "./Components/ContactUs/ContactUs";
import FAQ from "./Components/FAQ/FAQ";
import AboutMe from "./Components/AboutUs/AboutMe";
// import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <Router>
      <div className="absolute top-0 bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
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
        <Portfolio />
        <Branding />
        <NewCard />
        <Pricing />
        <ContactUs />
        <FAQ />
        <Routes>
          {/* <Route path="/faq" element={<FAQ />} /> */}
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
