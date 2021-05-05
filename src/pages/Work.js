import React, { useEffect } from "react";

// Imports
import WORK1 from "../assets/work/work-1.jpg";
import WORK2 from "../assets/work/work-2.jpg";
import WORK3 from "../assets/work/work-3.jpg";
import WORK4 from "../assets/work/work-4.jpg";

const workObj = [
   {
      name: "Estes Modeling Agency",
      img: WORK1,
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
   },
   {
      name: "Laurie Art Museum",
      img: WORK2,
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
   },
   {
      name: "The Square Fine Dining",
      img: WORK3,
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
   },
   {
      name: "Lemontree Bakery",
      img: WORK4,
      description:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
   },
];

const Work = () => {
   useEffect(() => {
      const header = document.querySelector(".site-header");
      header.classList.add("special-header");
      return () => header.classList.remove("special-header");
   }, []);
   return (
      <article className="work">
         {/* Title Section */}
         <div className="section-header">
            <h1 data-aos="fade-up">Work</h1>
            <p data-aos="fade-up" data-aos-delay="200">
               Creativity Simplified.
            </p>
         </div>

         {/* Work Items */}
         <div className="work-items" data-aos="fade-up" data-aos-delay="400">
            {workObj.map((work, i) => {
               return (
                  <div className="work-item" key={i}>
                     <a href="#0" className="img-container">
                        {" "}
                        <img src={work.img} alt={work.img} />
                     </a>
                     <p>{work.name}</p>
                     <p>{work.description}</p>
                  </div>
               );
            })}
         </div>
      </article>
   );
};

export default Work;
