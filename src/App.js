import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alsuwr from "./pages/Alsuwr/Alsuwr";
import DatalesAlsuwr from "./pages/DatalesAlsuwr/DatalesAlsuwr";
import NotFouand from "./pages/NotFouand/NotFouand";
import Footer from "./components/Footer/Footer";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import 'animate.css';
import Swal from "sweetalert2";
import Contact from "./components/Contact/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [search, setsearch] = useState("");
  const [mode, setMode] = useState(true);
  const changeMode = () => {
    setMode(!mode);
  };
  useEffect(()=>{
   Swal.fire({
      title: '  هذا العمل صدقه جاريه علي روح (جدتي) الطيبه وروح صديقي (محمد سلامه) وجميع أموات المسلمين... نسألكم الدعاء',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
},[])
  return (
    <div className="App">
      <Router>
        <div
          className={mode?"m-light":"m-dark "}
          
        >
         
          <Navbar
          classNav={mode?"Navbar nav-light":"Navbar nav-dark"}
            setsearch={setsearch}
            onClick={() => changeMode()}
            Children={mode ? <BsFillSunFill/> : <MdDarkMode />}
            navStyle={{ backgroundColor: mode ? "#F2F2F2" : "#242526", color:mode?"black":"white"}}
          />
          <div className="content">
            <Routes>
              <Route path="*" element={<NotFouand />} />
              <Route path="/" element={<Alsuwr search={search} />} />
              <Route path="/datalies/:id" element={<DatalesAlsuwr />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
