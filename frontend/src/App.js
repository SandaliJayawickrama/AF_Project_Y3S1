import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Header from './Components/Home/Header';
import Home from './Components/Home/Home';
import Services from './Components/Home/Service';
import About from './Components/Home/About';
import Contact from './Components/Home/Contact';
import Error from './Components/Home/Error';
import MCounterclass from'./Components/Admin/MCounterclass';
import Allmarking from './Components/Admin/Allmarking';
import ResearchTopic from './Components/Student/ResearchTopic';
import ViewResearchTopic from './Components/Student/ViewResearchTopic';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/service" element={<Services />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
         <Route exact path="/mcounterclass" element={<MCounterclass/>}/>
        <Route exact path="/allmarking" element={<Allmarking/>}/>
        <Route exact path="/topic" element={<ResearchTopic />} />
        <Route exact path="/viewtopic" element={<ViewResearchTopic />} />
        <Route exact path="*" element={<Error />} />
       
        
      </Routes>
    
      
    </>
  );
}

export default App;