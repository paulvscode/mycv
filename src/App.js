import { Link, animateScroll as scroll } from "react-scroll";

import "./App.css";
import JobTitle from "./Components/JobTitle/index";
import Realisations from "./Components/Realisations/index";
import Contact from "./Components/Contact/index";
import CvEnLigne from "./Components/CvEnLigne/index";
import Footer from "./Components/Footer/index";

function App() {
  return (
    <div className='container-background'>
      <div className='App'>
        <div className='container-grid-contain'>
          <nav className='grid-container-navbar'>
            <div className='navbar-name'>Paul Barraud de Lagerie</div>
            <Link
              activeClass='active'
              to='realisations'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div className='navbar-realisation'>Réalisations</div>
            </Link>
            <Link
              activeClass='active'
              to='cv'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div className='navbar-cvenligne'>Cv en ligne</div>
            </Link>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div className='navbar-contact'>Contact</div>
            </Link>
          </nav>
        </div>

        <div className='container-content'>
          <JobTitle />
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
