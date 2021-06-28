import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
    console.log("Contructor");
  }

  componentDidMount() {
    console.log("component Did mount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ robots: data }));
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    console.log("render");
    const { robots, searchField } = this.state;
    const filterRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f2">Robo Friends</h1>
        <SearchBox
          onSearchChange={this.onSearchChange}
          searchField={searchField}
        />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filterRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}
