import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Users from "./components/Users";
import { FormProvider } from "./FormContext";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cities: [],
      countries: [],
      states: [],
      users: [],
      usersChanged: false,
      url: "http://localhost:3001"
    };
  }
  componentDidMount() {
    fetch(this.state.url + "/countries")
      .then(x => x.json())
      .then(data => {
        this.setState({ countries: data });
      });
    fetch(this.state.url + "/states")
      .then(x => x.json())
      .then(data => {
        this.setState({ states: data });
      });
    fetch(this.state.url + "/cities")
      .then(x => x.json())
      .then(data => {
        this.setState({ cities: data });
      });
  }

  render() {
    return (
      <FormProvider>
        <div className="App">
          <Form
            cities={this.state.cities}
            countries={this.state.countries}
            states={this.state.states}
          />
          <Users
            cities={this.state.cities}
            countries={this.state.countries}
            states={this.state.states}
          />
        </div>
      </FormProvider>
    );
  }
}

export default App;
