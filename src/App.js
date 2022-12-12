import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News'; 
import { Routes, Route } from "react-router-dom";

export class App extends Component {
  render() {
    document.body.style.backgroundColor="black";
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={9} country="in" category="general"/>}/>
          <Route exact path="/Business" element={<News key="business" pageSize={9} country="in" category="business"/>}/>
          <Route exact path="/Entertainment" element={<News key="entertainment" pageSize={9} country="in" category="entertainment"/>}/>
          <Route exact path="/General" element={<News key="general" pageSize={9} country="in" category="general"/>}/>
          <Route exact path="/Health" element={<News key="health" pageSize={9} country="in" category="health"/>}/>
          <Route exact path="/Science" element={<News key="science" pageSize={9} country="in" category="science"/>}/>
          <Route exact path="/Sports" element={<News key="sports" pageSize={9} country="in" category="sports"/>}/>
          <Route exact path="/Technology" element={<News key="technology" pageSize={9} country="in" category="technology"/>}/>
        </Routes>
      </div>
    )
  }
}

export default App

