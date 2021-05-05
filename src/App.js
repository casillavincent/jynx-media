// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Components
import Agency from "./pages/Agency";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";

// Packages
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./pages/Contact";

AOS.init({ easing: "ease-out-quad", duration: 900 });

function App() {
   return (
      <>
         <ParallaxProvider>
            <Router>
               <Header />
               <Switch>
                  <div className="container">
                     <main className="site-main-page main">
                        <Route exact path="/" component={Home} />
                        <Route path="/agency" component={Agency} />
                        <Route path="/services" component={Services} />
                        <Route path="/work" component={Work} />
                        <Route path="/contact" component={Contact} />
                     </main>
                  </div>
               </Switch>
               <Footer />
            </Router>
         </ParallaxProvider>
      </>
   );
}

export default App;
