import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/navbar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="bg-[#f8f8f5] ">
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
