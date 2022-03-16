import React, { Component } from "react";
import userservice from "../services/userservice";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeDatebirth= this.onChangeDatebirth.bind(this);
    this.onChangeAddress= this.onChangeAddress.bind(this);
    this.onChangePostalcode = this.onChangePostalcode.bind(this);
    this.onChangeTown= this.onChangeTown.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.newUser  = this.newUser.bind(this);

    this.state = {
      name: "",
      lastname: "",
      datebirth: "",
      address:"",
      postalcode: "",
      town: "",
      country: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value,
    });
  }
  onChangeDatebirth(e) {
    this.setState({
      datebirth: e.target.value,
    });
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }
  onChangePostalcode(e) {
    this.setState({
      postalcode: e.target.value,
    });
  }
  onChangeTown(e) {
    this.setState({
      town: e.target.value,
    });
  }
  onChangeCountry(e) {
    this.setState({
      country: e.target.value,
    });
  }

  saveUser() {
    let data = {
      name: this.state.name,
      lastname: this.state.lastname,
      datebirth: this.state.datebirth,
      address:this.state.address,
      postalcode: this.state.postalcode,
      town: this.state.town,
      country: this.state.country,
      
    };

    userservice.create(data)
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

  newUser() {
    this.setState({
      name: "",
      lastname: "",
      datebirth: "",
      address:"",
      postalcode: "",
      town: "",
      country: "",

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
         <h4>Ajouter  des utilisateurs</h4>
        {this.state.submitted ? (
          <div>
            <h4>Ajouté avec success!</h4>
            <button className="btn btn-success" onClick={this.newUser}>
              ajout
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Nom</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Prénom</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.lastname}
                onChange={this.onChangeLastname}
                name="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">date de naissance</label>
              <input
                type="date"
                className="form-control"
                id="title"
                required
                value={this.state.datebirth}
                onChange={this.onChangeDatebirth}
                name="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">adresse</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.address}
                onChange={this.onChangeAddress}
                name="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">code postale</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.postalcode}
                onChange={this.onChangePostalcode}
                name="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">ville</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.town}
                onChange={this.onChangeTown}
                name="description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">pays</label>
              <input
                type="text"
                className="form-control"
                id="country"
                required
                value={this.state.country}
                onChange={this.onChangeCountry}
                name="country"
              />
            </div>
            <br></br>
            <button onClick={this.saveUser} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
