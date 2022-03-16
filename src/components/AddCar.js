import React, { Component } from "react";
import carservice from "../services/carservice";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeRegistration = this.onChangeRegistration.bind(this);
    this.onChangeDate= this.onChangeDate.bind(this);
    this.onChangeBrand= this.onChangeBrand.bind(this);
    this.onChangeModel= this.onChangeModel.bind(this);
    this.onChangeType= this.onChangeType.bind(this);
    this.saveCar = this.saveCar.bind(this);
    this.newCar  = this.newCar.bind(this);

    this.state = {
      registration: "",
      date: "",
      brand: "",
      model:"",
      type: "",
     
    };
  }

  onChangeRegistration(e) {
    this.setState({
      registration: e.target.value,
    });
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }
  onChangeBrand(e) {
    this.setState({
      brand: e.target.value,
    });
  }
  onChangeModel(e) {
    this.setState({
      model: e.target.value,
    });
  }
  onChangeType(e) {
    this.setState({
      type: e.target.value,
    });
  }
 

  saveCar() {
    let data = {
      registration: this.state.registration,
      date: this.state.date,
      brand: this.state.brand,
      model:this.state.model,
      type: this.state.type,
      
      
    };

    carservice.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newCar() {
    this.setState({
      registration: "",
      date: "",
      brand: "",
      model:"",
      type: "",

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
         <h4>Ajouter  des Véhicules</h4>
        {this.state.submitted   ? (
          <div>
            <h4>Ajouté avec success!</h4>
            <button className="btn btn-success" onClick={this.newCar}>
              ajout
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Immatriculation</label>
              <input
                type="text"
                className="form-control"
                id="registration"
                required
                value={this.state.registration}
                onChange={this.onChangeRegistration}
                name="registration"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                required
                value={this.state.date}
                onChange={this.onChangeDate}
                name="date"
              />
            </div>
            <div className="form-group">
              <label htmlFor="brand">Marque</label>
              <input
                type="text"
                className="form-control"
                id="brand"
                required
                value={this.state.brand}
                onChange={this.onChangeBrand}
                name="brand"
              />
            </div>
            <div className="form-group">
              <label htmlFor="model">Modéle</label>
              <input
                type="text"
                className="form-control"
                id="model"
                required
                value={this.state.model}
                onChange={this.onChangeModel}
                name="model"
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type  de véhicule</label>
              <input
                type="text"
                className="form-control"
                id="type"
                required
                value={this.state.type}
                onChange={this.onChangeType}
                name="type"
              />
            </div>
            
            
            <br></br>
            <button onClick={this.saveCar} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
