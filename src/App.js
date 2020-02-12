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
      {name:'rat', color:'dark grey'},
      //ocutpuse needs to be here 

    ]
  }

  deleteAnimal = (i) => {
    let newAnimalList = [...this.state.animals] //copy state
    newAnimalList.splice(i,1) //slice index 
    this.setState({
      animals:newAnimalList
    })

  }
  
  addAnimal = (animal) => {
    console.log('add animal',animal)
    let animalCopy = [...this.state.animals]
    animalCopy.push(animal)
    this.setState({
      animals:animalCopy
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
            addTheAnimal= {this.addAnimal}
          />
        </ul>

      </div>
    );
  }
}

export default App;

