import React, { Component } from "react";
import NavbarComponents from "./Components/NavbarComponents";
import ButtonComponent from "./Components/ButtonComponents";
import { Route, BrowserRouter } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponents />
        <ButtonComponent />
        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainer  />
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
