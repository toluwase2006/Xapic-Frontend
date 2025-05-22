import "./App.css";
import Navbar from "../src/components/Navbar";
import LandingPage from "./pages/LandingPage";
import Services from "./pages/Services"
import { Route, Routes } from "react-router-dom";
import WhoWeAre from "./pages/WhoWeAre";
import ContactUs from "./pages/ContactUs";
import Portfolio from "./pages/Portfolio";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/whoWeAre" element={<WhoWeAre />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
      </Routes>
    </>
  );
}

export default App;
