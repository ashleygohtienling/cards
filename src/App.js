
import './App.css';
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import FullCard from "./Components/FullCard"



function App(){
  
  const data = [
      {
        title: "HTML", 
        description: "This is HTML"
      },
      {
        title: "CSS", 
        description: "This is CSS"
      },
      {title: "Javascript",
       description: "This is Javascript"
      },
      {title: "React",
       description: "This is React"
      },
      {title: "Angular",
       description: "This is Angular"
      },

  ]
  return (  
    <React.Fragment>
    <Router>
      <Switch>
        <Route path ="./" exact component = {Hero}/>
        <Hero data ={this.data}/>
        <Route path ="./cards/:title" component = {Card}/>
        <FullCard data = {this.data}/>
        <Route path ="./FullCard"component = {FullCard}/>
      </Switch>
    </Router>
    </React.Fragment>

    );
  }


export default App;
