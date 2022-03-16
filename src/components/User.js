import React, { Component } from "react";
import userservice from "../services/userservice";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeDatebirth= this.onChangeDatebirth.bind(this);
    this.onChangeAddress= this.onChangeAddress.bind(this);
    this.onChangePostalcode = this.onChangePostalcode.bind(this);
    this.onChangeTown= this.onChangeTown.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);

    

    this.state = {
     currentUser: {
      key: null,
      name: "",
      lastname: "",
      datebirth: "",
      address:"",
      postalcode: "",
      town: "",
      country: "",
    },
      message: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { user } = nextProps;
    if (prevState.currentUser.key !== user.key) {
      return {
        currentUser: user,
        message: ""
      };
    }

    return prevState.currentUser;
  }

  componentDidMount() {
    this.setState({
        currentUser: this.props.user,
    });
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentUser: {
          ...prevState.currentUser,
          name: name,
        },
      };
    });
  }

  onChangeLastname(e) {
    const lastname = e.target.value;

    this.setState((prevState) => ({
        currentUser: {
        ...prevState.currentUser,
        lastname: lastname,
      },
    }));
  }
  onChangeDatebirth(e) {
    const datebirth = e.target.value;

    this.setState((prevState) => ({
        currentUser: {
        ...prevState.currentUser,
        datebirth: datebirth,
      },
    }));
  }
  onChangeAddress(e) {
    const address = e.target.value;

    this.setState((prevState) => ({
        currentUser: {
        ...prevState.currentUser,
        address: address,
      },
    }));
  }
  onChangeCountry(e) {
    const country = e.target.value;

    this.setState((prevState) => ({
        currentUser: {
        ...prevState.currentUser,
        country: country,
      },
    }));
  }
  onChangeTown(e) {
    const town = e.target.value;

    this.setState((prevState) => ({
        currentUser: {
        ...prevState.currentUser,
        town: town,
      },
    }));
  }
  onChangePostalcode(e) {
    const postalcode = e.target.value;

    this.setState((prevState) => ({
        currentUser: {
        ...prevState.currentUser,
        postalcode: postalcode,
      },
    }));
  }




  updateUser() {
    const data = {
      name: this.state.currentUser.name,
      lastname: this.state.currentUser.lastname,
      datebirth: this.state.currentUser.datebirth,
      address: this.state.currentUser.address,
      postalcode: this.state.currentUser.postalcode,
      town: this.state.currentUser.town,
      country: this.state.currentUser.country,


    };

    userservice.update(this.state.currentUser.key, data)
      .then(() => {
        this.setState({
          message: "The user was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteUser() {
    userservice.delete(this.state.currentUser.key)
      .then(() => {
        this.props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <h4>Utilisateur</h4>
        {currentUser ? (
          <div className="edit-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentUser.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Prenom</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  value={currentUser.lastname}
                  onChange={this.onChangeLastname}
                />
              </div>
              <div className="form-group">
                <label htmlFor="datebirth">Date de naissance</label>
                <input
                  type="text"
                  className="form-control"
                  id="datebirth"
                  value={currentUser.datebirth}
                  onChange={this.onChangeDatebirth}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Adresse</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={currentUser.address}
                  onChange={this.onChangeAddress}
                />
              </div>
              <div className="form-group">
                <label htmlFor="postalcode">code Postale</label>
                <input
                  type="text"
                  className="form-control"
                  id="postalcode"
                  value={currentUser.postalcode}
                  onChange={this.onChangePostalcode}
                />
              </div>
              <div className="form-group">
                <label htmlFor="town">Ville</label>
                <input
                  type="text"
                  className="form-control"
                  id="town"
                  value={currentUser.town}
                  onChange={this.onChangeTown}
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Pays</label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  value={currentUser.country}
                  onChange={this.onChangeCountry}
                />
              </div>

           
            </form>

         

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteUser}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateUser}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a User...</p>
          </div>
        )}
      </div>
    );
  }
}
