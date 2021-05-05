import React from "react";
import Video from "../../assets/video1.mp4";

const Splash = () => {
   return (
      <section className="site-splash">
         <h1 data-aos="fade-up">Jynx</h1>
         <p className="site-splash__headline" data-aos="fade-up" data-aos-delay="100">
            A Digital Agency where Creativity meets Innovation.
         </p>
         <a href="#about" className="get-started" data-aos="fade-up" data-aos-delay="200">
            Get Started
         </a>
         <video className="banner" src={Video} autoPlay loop muted></video>
      </section>
   );
};

export default Splash;
