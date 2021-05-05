import React from "react";
import About from "../components/About";
import Values from "../components/Values";
import Splash from "../components/Splash";

const Home = () => {
   return (
      <article className="site-home-content">
         <Splash />
         <About />
         <Values />
      </article>
   );
};

export default Home;
