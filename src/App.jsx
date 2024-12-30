import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Skills />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
