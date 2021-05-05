import React, { useEffect } from "react";
import { VscArrowRight } from "react-icons/vsc";

import Branding from "../assets/services/brand.jpg";
import Development from "../assets/services/development.jpg";
import Shopping from "../assets/services/shopping.jpg";

const Services = () => {
   const servicesObj = [
      {
         id: "01",
         service: "Web Design + Web Development",
         img: Development,
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
         examples: [
            "UX + UI Design",
            "Web Development",
            "Wireframes + Prototypes",
            "Usability Testing",
         ],
      },
      {
         id: "02",
         service: "Brand Identity",
         img: Branding,
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
         examples: [
            "Logo Design",
            "Digital Marketing Strategy",
            "Competitive Analysis",
            "Search Engine Optimization",
         ],
      },
      {
         id: "03",
         service: "eCommerce",
         img: Shopping,
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
         examples: [
            "Digital Campaign Strategies",
            "CMS Development",
            "Engagement Strategies",
            "Analytics",
            "Search Engine Optimization",
         ],
      },
   ];

   useEffect(() => {
      const header = document.querySelector(".site-header");
      header.classList.add("special-header");
      return () => header.classList.remove("special-header");
   }, []);

   return (
      <article className="services">
         {/* Title component */}
         <section className="title" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <h1>Services</h1>
            <p>Strengthening your brand through research and best practices.</p>
         </section>

         {/* The services */}
         <section className="services-items">
            {servicesObj.map((service) => {
               return (
                  <div className="service-item" key={service.id}>
                     {/* Text Component */}
                     <div className="text-content">
                        <h2>{service.service}</h2>
                        <p className="description">{service.description}</p>

                        {/* Map through each example */}

                        <ul className="examples-container">
                           {service.examples.map((example, i) => (
                              <li key={i}>{example}</li>
                           ))}
                        </ul>

                        <a className="learn-more" href="#0">
                           Learn More
                           <VscArrowRight />
                        </a>
                     </div>

                     {/* Image Component */}
                     <img src={service.img} alt={service.service} width="500" loading="lazy" />
                  </div>
               );
            })}
         </section>
      </article>
   );
};

export default Services;
