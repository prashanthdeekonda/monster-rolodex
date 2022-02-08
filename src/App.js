import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CardList>
          {
             this.state.monsters.map(monster => <h1>{monster.name}</h1>)
          }
          </CardList>
       
        </header>
      </div>
    );
  }
}



export default App;
