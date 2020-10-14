import React, {Component} from 'react';
import './App.css';

//Create a class called App than uses (extends) the functionality of Component
class App extends Component{
  //Calls constructor() method for this component - initialise state + bind functions
  constructor(){
    //Calls the constructor() method on Component - gives us access to Component functionality e.g. this.state
    super();
    //Initialises state for the component
    this.state={
      monsters: []
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
  render(){
    return (
      <div className="App">
        {this.state.monsters.map((monster) => <div key={monster.id}> {monster.name} </div> )}
      </div>
    );
  }

}

export default App;
