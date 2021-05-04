
import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import FullCard from "./Components/FullCard"

const App = () => {
  const data = [
      {title: "HTML", description: "This is HTML"},
      {title: "CSS", description: "This is CSS"},
      {title: "Javascript", description: "This is Javascript"},
      {title: "React", description: "This is React"},
      {title: "Angular", description: "This is Angular"}

  ]







  return (  
    <>
    <Router>
      <Link to = "./" className = "" >Hero</Link>
      <Link to = "./Card" className = "" >Card</Link>
      <Link to = "./FullCard" className = "" >FullCard</Link>

      <Switch>
        <Route path ="./" exact component = {Hero}/>
        <Route path ="./Card" ßcomponent = {Card}/>
        <Route path ="./FullCard"component = {FullCard}/>
      </Switch>
    </Router>

    </>
  );
}

export default App;
