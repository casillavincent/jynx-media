import React from "react";
import myPhoto from "../../assets/mission-img.jpg";

const missionObj = [
   {
      id: "01",
      statement: "Be yourself",
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem repudiandae obcaecati, magnam, ea aliquam molestias soluta., ",
   },
   {
      id: "02",
      statement: "Professionalism",
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem repudiandae obcaecati, magnam, ea aliquam molestias soluta., ",
   },
   {
      id: "03",
      statement: "Keep growing",
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem repudiandae obcaecati, magnam, ea aliquam molestias soluta., ",
   },
   {
      id: "04",
      statement: "Sharing ideas",
      description:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem repudiandae obcaecati, magnam, ea aliquam molestias soluta., ",
   },
];

// Child Component
function ValuesChild({ number, statement, description }) {
   return (
      <section
         className="values__grid-item"
         data-aos="fade-up"
         data-aos-once="false"
         data-aos-delay="250"
      >
         <p className="number">{number}</p>
         <p className="statement">{statement}</p>
         <p className="description">{description}</p>
         <hr />
      </section>
   );
}

const Values = () => {
   return (
      <article className="values">
         {/* Text content container */}
         <section className="text-content">
            {/* Values title section */}
            <div className="values__title">
               <p data-aos="fade-up" data-aos-once="false">
                  Our Mission
               </p>
               <blockquote data-aos="fade-up" data-aos-once="false" data-aos-delay="150">
                  Our Words of Wisdom
               </blockquote>
            </div>

            {/* Actual content grid */}
            <div className="values__grid-items">
               {missionObj.map((value) => {
                  return (
                     <ValuesChild
                        number={value.id}
                        statement={value.statement}
                        description={value.description}
                        key={value.id}
                     />
                  );
               })}
            </div>
         </section>

         {/* Section image */}
         <img src={myPhoto} alt="Web Developer" width="500" loading="lazy" />
      </article>
   );
};

export default Values;
