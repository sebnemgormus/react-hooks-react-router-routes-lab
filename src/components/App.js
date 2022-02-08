import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (<BrowserRouter>
    <div className="App">
      <NavBar />
    </div> 
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/movies" component={Movies}/>
      <Route path="/directors" component={Directors}/>
      <Route path="/actors" component={Actors}/>
    </Switch>
  </BrowserRouter>
  )
}

export default App;
