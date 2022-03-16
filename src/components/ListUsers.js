import React, { Component } from "react";
import userservice from "../services/userservice";
import {  Link } from "react-router-dom";
import User from "./User";

export default class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveUser= this.setActiveUser.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      users: [],
      currentUser: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    userservice.getAll().on("value", this.onDataChange);
  }

  componentWillUnmount() {
    userservice.getAll().off("value", this.onDataChange);
  }

  onDataChange(items) {
    let users = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      users.push({
        key: key,
        name: data.name,
        lastname:  data.lastname,
        datebirth:  data.datebirth,
        address:  data.address,
        postalcode:  data.postalcode,
        town:  data.town,
        country:  data.country,
      
      });
    });

    this.setState({
      users: users,
    });
  }

  refreshList() {
    this.setState({
      currentUser: null,
      currentIndex: -1,
    });
  }

  setActiveUser(users, index) {
    this.setState({
      currentUser: users,
      currentIndex: index,
    });
  }

  

  render() {
    const { users, currentUser, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">
       
         
          <h4>listes  des utilisateurs</h4>

          <ul className="list-group">
            {users &&
              users.map((user, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveUser(user, index)}
                  key={index}
                >
                  {user.name}  {user.lastname}
                </li>
              ))}
          </ul>

        
        </div>
        <div className="col-md-6">
          {currentUser ? (
            <User
              user={currentUser}
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
