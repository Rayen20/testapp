import React, { Component } from "react";
import carservice from "../services/carservice";

export default class Car extends Component {
  constructor(props) {
    super(props);
    this.onChangeRegistration = this.onChangeRegistration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeBrand= this.onChangeBrand.bind(this);
    this.onChangeModel= this.onChangeModel.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.updateCar = this.updateCar.bind(this);
    this.deleteCar = this.deleteCar.bind(this);

    

    this.state = {
     currentCar: {
      key: null,
      registration: "",
      date: "",
      brand: "",
      model:"",
      type: "",
    },
      message: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { car } = nextProps;
    if (prevState.currentCar.key !== car.key) {
      return {
        currentCar: car,
        message: ""
      };
    }

    return prevState.currentCar;
  }

  componentDidMount() {
    this.setState({
      currentCar: this.props.car,
    });
  }

  onChangeRegistration(e) {
    const registration = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCar: {
          ...prevState.currentCar,
          registration: registration,
        },
      };
    });
  }

  onChangeDate(e) {
    const date = e.target.value;

    this.setState((prevState) => ({
      currentCar: {
        ...prevState.currentCar,
        date: date,
      },
    }));
  }
  onChangeBrand(e) {
    const brand = e.target.value;

    this.setState((prevState) => ({
      currentCar: {
        ...prevState.currentCar,
        brand: brand,
      },
    }));
  }
  onChangeModel(e) {
    const model = e.target.value;

    this.setState((prevState) => ({
      currentCar: {
        ...prevState.currentCar,
        model: model,
      },
    }));
  }
  onChangeType(e) {
    const type = e.target.value;

    this.setState((prevState) => ({
      currentCar: {
        ...prevState.currentCar,
        type: type,
      },
    }));
  }
 
  


  updateCar() {
    const data = {
      registration: this.state.registration,
      date: this.state.date,
      brand: this.state.brand,
      model:this.state.model,
      type: this.state.type,
    
    };

    carservice.update(this.state.currentCar.key, data)
      .then(() => {
        this.setState({
          message: "modifié avec succés!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteCar() {
    carservice.delete(this.state.currentCar.key)
      .then(() => {
        this.props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentCar } = this.state;

    return (
      <div>
        <h4>Car</h4>
        {currentCar ? (
          <div className="edit-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Immatriculation</label>
                <input
                  type="text"
                  className="form-control"
                  id="registration"
                  value={currentCar.registration}
                  onChange={this.onChangeRegistration}
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  value={currentCar.date}
                  onChange={this.onChangeDate}
                />
              </div>
              <div className="form-group">
                <label htmlFor="brand">Marque</label>
                <input
                  type="text"
                  className="form-control"
                  id="brand"
                  value={currentCar.brand}
                  onChange={this.onChangeBrand}
                />
              </div>
              <div className="form-group">
                <label htmlFor="model">Modéle</label>
                <input
                  type="text"
                  className="form-control"
                  id="model"
                  value={currentCar.model}
                  onChange={this.onChangeModel}
                />
              </div>
              <div className="form-group">
                <label htmlFor="type">Type de véhicule</label>
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  value={currentCar.type}
                  onChange={this.onChangeType}
                />
              </div>
             
            

           
            </form>

         

            <button
              className="badge badge-danger mr-2 btn btn-danger"
              onClick={this.deleteCar}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success btn btn-success"
              onClick={this.updateCar}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Cliquer sur une véhicule....</p>
          </div>
        )}
      </div>
    );
  }
}
