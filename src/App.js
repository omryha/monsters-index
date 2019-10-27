import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };

    // this.handleChange = this.handleChange.bind(this); - arrow functions do this automatically (Lexical scope)
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state; // Destrcuting
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ); // Filtering monsters by search field
    return (
      <div className="App">
        <h1>Monsters Index</h1>
        <SearchBox
          placeholder="Search a monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
