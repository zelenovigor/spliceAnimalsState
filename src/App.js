import React, { Component } from 'react';
import './App.css';
import Animal from './Animal'


class App extends Component {
  
  state = {
    animals: [
      {name: 'panda', color:'white'},
      {name: 'tiger', color:'yellow'}, 
      {name:'bat', color:'black'},
      {name:'possum', color:'brown'}, 
      {name:'cat', color:'orange'}, 
      {name:'rat', color:'dark grey'}
    ]
  }

  deleteAnimal = (i) => {
    console.log('delete ', i)
    let newAnimalList = [...this.state.animals]
    newAnimalList.splice(i,1)
    this.setState({
      animals:newAnimalList
    })

  }
  
  render() { /**Put javascript in here */
    //this.doSomething('cool') This is on page load 
    return (
      <div> 
        <ul>
          <Animal 
            animalProps={ this.state.animals } 
            deleteTheAnimal= {this.deleteAnimal}
          />
        </ul>

      </div>
    );
  }
}

export default App;

