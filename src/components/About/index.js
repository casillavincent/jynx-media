import React from "react";

// Imports
import myPhoto from "../../assets/about-img.png";
import { Parallax } from "react-scroll-parallax";

const About = () => {
   return (
      <article className="about" id="about">
         <Parallax className="toggled-image" x={[0, 15]}>
            <img className="about__image" src={myPhoto} alt="iPhone Mockup" width="250" />
         </Parallax>

         <img
            className="default-image"
            src={myPhoto}
            alt="iPhone Mockup"
            width="250"
            loading="lazy"
         />

         {/* Text Content */}
         <div className="about__text-content" data-aos="fade-up">
            <p>About</p>
            <blockquote>
               {" "}
               A curated team of highly skilled designers and developers who love their craft.
            </blockquote>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure quas ex nam? Id
               sit iusto, adipisci officia, odio repellendus in commodi vero molestiae obcaecati
               eveniet totam quo quas aut.
            </p>
         </div>
      </article>
   );
};

export default About;
