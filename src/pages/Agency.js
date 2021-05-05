import React from "react";

// Photos
import HS01 from "../assets//team-headshots/people-1.jpg";
import HS02 from "../assets//team-headshots/people-2.jpg";
import HS03 from "../assets//team-headshots/people-3.jpg";
import HS04 from "../assets//team-headshots/people-4.jpg";
import HS05 from "../assets//team-headshots/people-5.jpg";
import HS06 from "../assets//team-headshots/people-6.jpg";
import HS07 from "../assets//team-headshots/people-7.jpg";
import HS08 from "../assets//team-headshots/people-8.jpg";
import HS09 from "../assets//team-headshots/people-9.jpg";
import HS10 from "../assets//team-headshots/people-10.jpg";
import HS11 from "../assets//team-headshots/people-11.jpg";
import HS12 from "../assets//team-headshots/people-12.jpg";
import HS13 from "../assets//team-headshots/people-13.jpg";
import HS14 from "../assets//team-headshots/people-14.jpg";
import HS15 from "../assets//team-headshots/people-15.jpg";
import HS16 from "../assets//team-headshots/people-16.jpg";
import HS17 from "../assets//team-headshots/people-17.jpg";
import HS18 from "../assets//team-headshots/people-18.jpg";

const Agency = () => {
   const peopleObj = [
      {
         name: "Zanna Tim",
         img: HS01,
         role: "Founder + CEO",
      },
      {
         name: "Sommer Charnette",
         img: HS02,
         role: "Director & Development",
      },
      {
         name: "Jamie Arabella",
         img: HS03,
         role: "Project Manager",
      },
      {
         name: "Madisyn Fulton",
         img: HS04,
         role: "Content Strategist",
      },
      {
         name: "Cooper Dana",
         img: HS05,
         role: "Full Stack Developer",
      },
      {
         name: "Olivia Hanson",
         img: HS06,
         role: "UX/UI Designer",
      },
      {
         name: "Garret Santos",
         img: HS07,
         role: "Front-end Web Developer",
      },
      {
         name: "Dennis James",
         img: HS08,
         role: "Front-end Web Developer",
      },
      {
         name: "Ron Chandler",
         img: HS09,
         role: "Designer",
      },
      {
         name: "Dominic Chan",
         img: HS10,
         role: "Growth Manager",
      },
      {
         name: "Casey Lowe",
         img: HS11,
         role: "Project Manager",
      },
      {
         name: "Jerome Swanson",
         img: HS12,
         role: "Junior Web Developer",
      },
      {
         name: "Blake Bridges",
         img: HS13,
         role: "Talent Acquisition",
      },
      {
         name: "Brad Schwartz",
         img: HS14,
         role: "Web Developer",
      },
      {
         name: "Danny Caldwell",
         img: HS15,
         role: "Full Stack Developer",
      },
      {
         name: "Leroy Murray",
         img: HS16,
         role: "Designer",
      },
      {
         name: "Spencer Holt",
         img: HS17,
         role: "Client Engagement Manager",
      },
      {
         name: "Cheryl Hammond",
         img: HS18,
         role: "Client Engagement Manager",
      },
   ];
   return (
      <article className="agency">
         {/* Title section for above the fold */}
         <section className="agency__title" data-aos="fade-up">
            <h1>Agency</h1>
            <p>Meet our team</p>
            <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit earum qui incidunt,
               reiciendis eos error facilis voluptatem dicta iusto quidem vitae exercitationem
               similique accusamus recusandae aspernatur aliquam voluptate totam. Eius!
            </p>
         </section>

         {/* The team section */}
         <section className="agency__team" data-aos="fade-up" data-aos-delay="200">
            {peopleObj.map((people) => {
               return (
                  <div className="team-member" key={people.img}>
                     <img
                        src={people.img}
                        alt={`Team Member - ${people.name}`}
                        width="250"
                        loading="lazy"
                     />
                     <p className="name">{people.name}</p>
                     <p className="role">{people.role}</p>
                  </div>
               );
            })}
         </section>
      </article>
   );
};

export default Agency;
