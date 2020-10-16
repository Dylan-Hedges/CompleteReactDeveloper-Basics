import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component.jsx';
import './App.css';

//Create a class called App than uses (extends) the functionality of Component
class App extends Component{
  //Calls constructor() method for this component - initialise state + bind functions
  constructor(){
    //Calls the constructor() method on Component - gives us access to Component functionality e.g. this.state
    super();
    //Initialises state for the component
    this.state={
      monsters: [],
      searchField:''
    }
  }
  //Fetches user data from API - Lifecycle method that is called when the component mounts
  componentDidMount(){
    //Requests user data from the API - returns a Promise
    fetch('https://jsonplaceholder.typicode.com/users')
    //Parses what is returned from the API into a JSON format our JS can use - list of users
    .then(response => response.json())
    //Sets the component state to be the list of users
    .then(users => this.setState({monsters: users}))
  }
  //Renders the app and passes down monster data as props
  render(){
    //Extracts the monsters and what the user types from state
    const {monsters, searchField} = this.state;
    //Filters monsters based on what the user types
    const filteredMonsters = monsters.filter(monster =>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });
    return (
      <div className="App">
        <input type='search' placeholder='search monsters' onChange={e => {this.setState({searchField: e.target.value})}} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}

export default App;
