import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list-component';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monster: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monster: users}));
  }

  render() {
    const {monsters, searchField } = this.state;
    const filteredMonster = monsters.filter( mon => mon.name.toLowerCase().includes(searchField.toLowerCase))

    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField

    return (
      <div className="App">
      <input type='search' 
      placeholder='search monsters'
        onChange={e => 
          this.setState({searchField: e.target.value})}
      />
      <CardList monseer={this.state.monster}/>
    </div>
    )
  }
}

export default App;
