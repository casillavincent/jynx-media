import React, { useEffect, useState } from "react";
import ContactImg from "../assets/contact-img.jpg";

const Contact = () => {
   const [isContact, setIsContact] = useState(false);

   // This function will change the style only for initial load to a dark font
   const toggleSpecialHeader = () => {
      const header = document.querySelector("header");
      if (isContact) {
         header.classList.add("special-header");
      }
   };

   useEffect(() => {
      const header = document.querySelector("header");
      setIsContact(true);
      toggleSpecialHeader();

      // Clean up function
      return () => {
         setIsContact(false);
         header.classList.remove("special-header");
      };
   });
   return (
      <article className="contact">
         <div className="text-content">
            {/* Title Section */}
            <section className="title-section">
               <h1 data-aos="fade-up" data-aos-anchor-placement="top-center">
                  Contact
               </h1>
               <p data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
                  We'd love to hear from you.
               </p>
            </section>

            <section className="contact-form">
               <form
                  action=""
                  className="form-field"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                  data-aos-delay="400"
               >
                  {/* Name Field */}
                  <div className="form-field__name">
                     {/* First Name */}
                     <div className="field-container first-name">
                        <label htmlFor="fname">First Name</label>
                        <input
                           type="text"
                           id="fname"
                           name="fname"
                           className="fname-field"
                           placeholder="Your Name"
                           required
                        />
                     </div>

                     {/* Last Name */}
                     <div className="field-container last-name">
                        <label htmlFor="lname">Last Name</label>
                        <input
                           type="text"
                           id="lname"
                           name="lname"
                           className="lname-field"
                           placeholder="Your Last Name"
                           required
                        />
                     </div>
                  </div>

                  {/* Email */}
                  <div className="field-container form-field__email">
                     <label htmlFor="email">Email</label>
                     <input
                        type="text"
                        id="email"
                        name="email"
                        className="email-field"
                        placeholder="example@email.com"
                        required
                     />
                  </div>
                  {/* Phone */}
                  <div className="field-container form-field__phone">
                     <label htmlFor="phone">Phone</label>
                     <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="phone-field"
                        placeholder="000-000-0000"
                        required
                     />
                  </div>

                  {/* Topics */}
                  <div className="field-container form-field__topic">
                     <label htmlFor="topic">Let's chat about ...</label>
                     <select name="topic" id="topic">
                        <option value="Branding for a business">Branding for a business</option>
                        <option value="Web design and development">
                           Web design and development
                        </option>
                        <option value="eCommerce for a small business">
                           eCommerce for a small business
                        </option>
                        <option value="Digital marketing strategies">
                           Digital marketing strategies
                        </option>
                        <option value="Something else">Something else</option>
                     </select>
                  </div>

                  {/* Message */}
                  <div className="field-container form-field__message">
                     <label htmlFor="message">Your Message</label>
                     <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        className="message-field"
                        placeholder="Write your message here"
                        required
                     ></textarea>
                  </div>

                  {/* Submit */}
                  <div className="field-container form-field__submit">
                     <input type="submit" value="Submit" className="submit" />
                  </div>
               </form>
            </section>
         </div>

         {/* Image */}
         <img
            className="contact__photo"
            src={ContactImg}
            alt="Contact Portrait"
            width="500"
            loading="lazy"
         />
      </article>
   );
};

export default Contact;
