import "./App.css";
import Navbar from "../src/components/Navbar";
import LandingPage from "./pages/LandingPage";
import Services from "./pages/Services"
import { Route, Routes } from "react-router-dom";
import WhoWeAre from "./pages/WhoWeAre";
import ContactUs from "./pages/ContactUs";
import Portfolio from "./pages/Portfolio";
import Schools from "./pages/Schools";
import DesignAndSchool from "./pages/DesignAndSchool"
import Engineering from "./pages/Engineering";
import SummerSchool from "./pages/SummerSchool";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/schools" element={<Schools />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/whoWeAre" element={<WhoWeAre />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
        <Route path="/schools/designAndSchool" element={<DesignAndSchool />}></Route>
        <Route path="/schools/engineering" element={<Engineering />}></Route>
        <Route path="/schools/summerSchool" element={<SummerSchool />}></Route>
      </Routes>
    </>
  );
}

export default App;
