import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News'; 
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () =>  {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWZIFY_APIKEY;

  const [progress, setProgress] = useState(0);

  const [mode, setMode] = useState("light");
  
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

    document.body.style.backgroundColor=`${mode === "dark"? "black": "white"}`;
    return (
      <div>
        <LoadingBar
        color={`${mode === "dark"? "white": "black"}`}
        progress={progress}
      />
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Routes>
          <Route exact path="/" element={<News mode={mode} apiKey={apiKey}setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/Business" element={<News mode={mode} apiKey={apiKey}setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business"/>}/>
          <Route exact path="/Entertainment" element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/General" element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/Health" element={<News mode={mode} apiKey={apiKey}setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health"/>}/>
          <Route exact path="/Science" element={<News mode={mode} apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science"/>}/>
          <Route exact path="/Sports" element={<News mode={mode} apiKey={apiKey}setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
          <Route exact path="/Technology" element={<News mode={mode} apiKey={apiKey}setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
        </Routes>
      </div>
    )
  }

export default App

