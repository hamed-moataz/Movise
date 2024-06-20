import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/Layout/Footer/Footer";
import Movise from "./components/Movise/Movise";
import News from "./components/News/News";
import Reviwse from "./components/Reviwse/Reviwse";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Test from "./components/tast/Tast";
import MoviseId from "./components/Movise_Id/MoviseId";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-up" element={<Login />} />
              <Route path="/movise" element={<Movise />} />
              <Route path="/:moviseid" element={<MoviseId />} />
              <Route path="/news" element={<News />} />
              <Route path="/reviwse" element={<Reviwse />} />
              <Route path="/test" element={<Test />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
