import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list-component';
import {SearchBox} from './components/search-box/search-box.component';

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
    const {monster, searchField } = this.state;
    const filteredMonster = monster.filter( monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase())
    )
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField

    return (
      <div className="App">
     
      <SearchBox placeholder='search monsters'
      handleChange ={e => this.setState({searchField: e.target.value})} />
      <CardList monseer={filteredMonster}/>
    </div>
    )
  }
}

export default App;
