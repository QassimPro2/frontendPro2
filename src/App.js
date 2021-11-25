import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Myplan from "./components/Myplan";
import Trips from "./components/Trips";
import Trip from "./components/Trip";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/trips" element={<Trips />} />
        <Route exact path="/trip" element={<Trip />} />
        <Route exact path="/myplan" element={<Myplan />} />
        <Route path="*" element={<h1> 404 </h1>} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
