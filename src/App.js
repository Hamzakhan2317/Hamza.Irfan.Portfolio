import React from "react";
import "./App.scss";
import {
  About,
  Skills,
  Testimonials,
  Work,
  Header,
  Footer,
} from "./containers";
import { Navbar } from "./components/index";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};
