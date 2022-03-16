import React, { Component } from "react";
import {  Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddUser from "./components/AddUser";
import Addcar from "./components/AddCar";

import ListUsers from "./components/ListUsers";
import Backoffice from "./components/Backoffice";
import ListCars from "./components/ListCars";



class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark" role="navigation">
          <a href="/users" className="navbar-brand">
            application
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                ajouter un utilisateur
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/addcar"} className="nav-link">
              ajouter une Véhicule
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to={"/back"} className="nav-link">
                Consulter la partie Backend
              </Link>
            </li>
            
          </div>
         
         
          
        </nav>
        <div className="container mt-3">
          <h2>Bienvenue dans mon application</h2>
          <Switch>
            <Route exact path={["/", "/back"]} component={Backoffice} />
            <Route exact path="/add" component={AddUser}/>
            <Route exact path="/users" component={ListUsers}/>
            <Route exact path="/cars" component={ListCars}/>
            <Route exact path="/addcar" component={Addcar}/>

          </Switch>
        </div>
      </div>
    );

}
}

export default App;