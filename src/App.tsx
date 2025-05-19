import "./App.css";
import Navbar from "../src/components/Navbar";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
