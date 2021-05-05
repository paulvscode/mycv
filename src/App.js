import "./App.css";
import NavBar from "./Components/NavBar/index";
import JobTitle from "./Components/JobTitle/index";
import Realisations from "./Components/Realisations/index";
import Contact from "./Components/Contact/index";
import Footer from "./Components/Footer/index";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='container-content'>
        <JobTitle />
        <Realisations />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
