import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News'; 
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_NEWZIFY_APIKEY;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    document.body.style.backgroundColor="black";
    return (
      <div>
        <LoadingBar
        color='white '
        progress={this.state.progress}
      />
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News apiKey={this.apiKey}setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route exact path="/Business" element={<News apiKey={this.apiKey}setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"/>}/>
          <Route exact path="/Entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>
          <Route exact path="/General" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
          <Route exact path="/Health" element={<News apiKey={this.apiKey}setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health"/>}/>
          <Route exact path="/Science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science"/>}/>
          <Route exact path="/Sports" element={<News apiKey={this.apiKey}setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}/>
          <Route exact path="/Technology" element={<News apiKey={this.apiKey}setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>
        </Routes>
      </div>
    )
  }
}

export default App

