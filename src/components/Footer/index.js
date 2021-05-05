import React from "react";

const Footer = () => {
   return (
      <footer className="site-footer">
         <div className="site-footer__rows site-footer__row-01">
            {/* First Column */}
            <div className="footer-col footer-col-01">
               <p className="logo">Jynx Media</p>
               <p>For Educational Purposes only</p>
               <p>&#169; Vincent Casilla</p>
            </div>
            {/* Second Column */}
            <div className="footer-col footer-col-02">
               <p className="footer-title">Company</p>

               <ul>
                  <li>
                     <a href="#0">Privacy Policy</a>
                  </li>
                  <li>
                     <a href="#0">Terms</a>
                  </li>
                  <li>
                     <a href="#0">Careers</a>
                  </li>
                  <li>
                     <a href="#0">Contact Us</a>
                  </li>
               </ul>
            </div>
            {/* Third Columnn */}
            <div className="footer-col footer-col-03">
               <p className="footer-title">Socials</p>
               <ul>
                  <li>
                     <a href="#0">Facebook</a>
                  </li>
                  <li>
                     <a href="#0">Twitter</a>
                  </li>
                  <li>
                     <a href="#0">Linkedin</a>
                  </li>
                  <li>
                     <a href="#0">Instagram</a>
                  </li>
               </ul>
            </div>
            {/* Fourth Column */}
            <div className="footer-col footer-col-04">
               <p className="footer-title">Stay In The Know</p>
               <form action="" className="footer-form">
                  <label htmlFor="email">Email</label>
                  <input type="text" className="email-input " id="email" name="email" />
                  <input type="submit" id="submit" className="submit" value="Submit" />
               </form>
            </div>
         </div>

         <hr />

         {/* Second ROw */}
         <div className="site-footer__rows site-footer__row-02">
            {/* Vancouver */}
            <div className="footer-col footer-col-01">
               <p className="shortened-location">Va</p>
               <p className="location">Vancouver</p>
               <ul className="ul-location-info">
                  <li>52 Burrard Street</li>
                  <li>Vancouver, BC, V5P 1S5</li>
                  <li>+1 777 777 7777</li>
               </ul>
            </div>

            {/* Toronto */}
            <div className="footer-col footer-col-02">
               <p className="shortened-location">To</p>
               <p className="location">Toronto</p>
               <ul className="ul-location-info">
                  <li>5th Floor, Atlantic Ave</li>
                  <li>Toronto, MP5 1K3</li>
                  <li>+1 888 888 8888</li>
               </ul>
            </div>

            {/* Montreal */}
            <div className="footer-col footer-col-03">
               <p className="shortened-location">Mo</p>
               <p className="location">Montreal</p>
               <ul className="ul-location-info">
                  <li>43 Av, Quebec</li>
                  <li>Montreal, Quebec H1T 2R9</li>
                  <li>+1 222 222 2222</li>
               </ul>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
