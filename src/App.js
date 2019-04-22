import React, { Component } from "react";
import "./App.css";
import FooBar from "./components/FooBar";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 3, userName: "Bob", joined: new Date("January 31 1980 12:30") },
        { id: 5, userName: "Aob", joined: new Date("January 2 1911 12:30") },
        { id: 10, userName: "Aob", joined: new Date("Feburary 2 1911 12:30") },
        { id: 15, userName: "Cob", joined: new Date("December 2 1911 12:30") },
        { id: 30, userName: "Dob", joined: new Date("June 2 1911 12:30") },
        { id: 45, userName: "Fob", joined: new Date("March 2 1911 12:30") },
        { id: 60, userName: "Gob", joined: new Date("January 11 1911 12:30") },
        { id: 9, userName: "Eob", joined: new Date("January 3 1911 12:30") },
        { id: 6, userName: "Zob", joined: new Date("January 19 1932 12:30") }
      ],
      fooMax: 5,
      barMax: 10,
      fooBarMax: 15
    };
  }
  deleteUser = id => {
    this.setState({
      users: this.state.users.filter(user => {
        return user.id !== id;
      })
    });
  };
  render() {
    return (
      <div>
        <FooBar
          users={this.state.users}
          FooSize={this.state.fooMax}
          BarSize={this.state.barMax}
          FooBarSize={this.state.fooBarMax}
          deleteUser={this.deleteUser}
        />
      </div>
    );
  }
}

export default App;
