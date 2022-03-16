import React, { Component } from "react";
import carservice from "../services/carservice";
import {  Link } from "react-router-dom";
import Car from "./Car";

export default class ListCars extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCar= this.setActiveCar.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      cars: [],
      currentCar: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    carservice.getAll().on("value", this.onDataChange);
  }

  componentWillUnmount() {
    carservice.getAll().off("value", this.onDataChange);
  }

  onDataChange(items) {
    let cars = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      cars.push({
        key: key,
        registration: data.registration,
        date: data.date,
        brand: data.brand,
        model:data.model,
        type: data.type,
        
      });
    });

    this.setState({
      cars: cars,
    });
  }

  refreshList() {
    this.setState({
      currentCar: null,
      currentIndex: -1,
    });
  }

  setActiveCar(cars, index) {
    this.setState({
      currentCar: cars,
      currentIndex: index,
    });
  }

  

  render() {
    const { cars, currentCar, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">
       
         
          <h4>listes  des Véhicules</h4>

          <ul className="list-group">
            {cars &&
              cars.map((car, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveCar(car, index)}
                  key={index}
                >
                  {car.registration} 
                </li>
              ))}
          </ul>

        
        </div>
        <div className="col-md-6">
          {currentCar ? (
            <Car
              car={currentCar}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <br />
              <p>cliquer pour modifier...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
