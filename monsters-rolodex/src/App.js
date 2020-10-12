import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//Create a class called App than uses (extends) the functionality of Component
class App extends Component{
  //Calls constructor() method for this component - initialise state + bind functions
  constructor(){
    //Calls the constructor() method on Component - gives us access to Component functionality e.g. this.state
    super();
    //Initialises state for the component
    this.state={
      monsters: [
        {name: 'Frankenstein', id: 'asc1'},
        {name: 'Dracula', id: 'asr2'},
        {name: 'Zombie', id: 'as1w'}
      ]
    }
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
