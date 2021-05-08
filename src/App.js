import { Link, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";

import "./App.css";
import JobTitle from "./Components/JobTitle/index";
import Realisations from "./Components/Realisations/index";
import Contact from "./Components/Contact/index";
import CvEnLigne from "./Components/CvEnLigne/index";
import Stack from "./Components/Stack/index";
import Footer from "./Components/Footer/index";
import UpArrow from "./Components/UpArrow/index";

function App() {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  console.log(scrollY);

  let changeBg = "grid-container-navbar ";
  let changeColorNav = "";
  let changeColorNavName = "";

  if (scrollY >= 1) {
    changeBg += "greying-out";
    changeColorNav = "color-navbar-on-scroll";
    changeColorNavName = "color-navbar-name-on-scroll";
  }

  return (
    <div className='container-background'>
      <div className='App'>
        {scrollY >= 1 && <UpArrow />}
        <div className='container-grid-contain'>
          <nav id='navbar-fixed-div' className={changeBg}>
            <div className={"navbar-name " + changeColorNavName}>
              Paul Barraud de Lagerie
            </div>
            <Link
              activeClass='active'
              to='stack'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div className={"navbar-realisation " + changeColorNav}>
                Stack
              </div>
            </Link>
            <Link
              activeClass='active'
              to='realisations'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div className={"navbar-realisation " + changeColorNav}>
                Réalisations
              </div>
            </Link>
            <Link
              activeClass='active'
              to='cv'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div className={"navbar-cvenligne " + changeColorNav}>
                Cv en ligne
              </div>
            </Link>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div className={"navbar-contact " + changeColorNav}>Contact</div>
            </Link>
          </nav>
        </div>
        <div className='container-content'>
          <JobTitle />
          <div id='stack'>
            <Stack />
          </div>
          <div id='realisations'>
            <Realisations />
          </div>
          <div id='cv'>
            <CvEnLigne />
          </div>
          <div id='contact'>
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
