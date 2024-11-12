import React, { Component } from "react";
import NavbarComponents from "./Components/NavbarComponents";
import ButtonComponent from "./Components/ButtonComponents";
import { Route, BrowserRouter } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";

export default class App extends Component {
  state = {
    title: "Wahidev Academy",
    users: [
      {
        id: 1,
        name: "Yanadawa",
        address: "Gresik",
        age: 24,
        phone: "1234567890123",
      },
      {
        id: 2,
        name: "Fardan",
        address: "Kediri",
        age: 20,
        phone: "1234567890123",
      },
      {
        id: 3,
        name: "Alfin",
        address: "Malang",
        age: 26,
        phone: "1234567890123",
      },
      {
        id: 4,
        name: "Alfin",
        address: "Malang",
        age: 26,
        phone: "1234567890123",
      },
      {
        id: 5,
        name: "Alfin",
        address: "Malang",
        age: 26,
        phone: "1234567890123",
      },
      {
        id: 6,
        name: "Alfin",
        address: "Malang",
        age: 26,
        phone: "1234567890123",
      },
      {
        id: 7,
        name: "Alfin",
        address: "Malang",
        age: 26,
        phone: "1234567890123",
      },
      {
        id: 8,
        name: "Alfin",
        address: "Malang",
        age: 26,
        phone: "1234567890123",
      },
      {
        id: 9,
        name: "Alfin",
        address: "Malang",
        age: 26,
        phone: "1234567890123",
      },
      {
        id: 10,
        name: "Alfin",
        address: "Malang",
        age: 26,
        phone: "1234567890123",
      },
      {
        id: 11,
        name: "Alfin",
        address: "Malang",
        age: 26,
        phone: "1234567890123",
      },
      {
        id: 12,
        name: "Alfin",
        address: "Malang",
        age: 26,
        phone: "1234567890123",
      },
      {
        id: 13,
        name: "Alfin",
        address: "Malang",
        age: 26,
        phone: "1234567890123",
      },
    ],
  };
  render() {
    return (
      <div>
        <NavbarComponents />
        <ButtonComponent title={this.state.title} />
        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainer users={this.state.users} />
          </Route>
          <Route path="/create" exact>
            <CreateUserContainer />
          </Route>
          <Route path="/edit/:id" exact>
            <EditUserContainer />
          </Route>
          <Route path="/detail/:id" exact>
            <DetailUserContainer />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}
