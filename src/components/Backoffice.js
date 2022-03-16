import React, { Component } from "react";
import {  Link } from "react-router-dom";

export default class Backoffice extends Component {
  

  render() {
   
    return (
      <div className="list row">
        <div className="col-md-6">
       
          
          <h4>
          <Link to={"/users"} className="nav-link">
          Listes Utilisateurs
          </Link>
          </h4>
          <h4>
          <Link to={"/cars"} className="nav-link">
          Listes Véhicules
          </Link>
          </h4>

         
      </div>
      </div>
    );
  }
}
