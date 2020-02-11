import React, { Component } from 'react';

class Animal extends Component {

    showAnimals = () => {
        //this.props.animalProps is an array of objects from the parent state
        let animalList = this.props.animalProps.map((eachAnimal, i)=> {
            return (
                <li key={i} >
                    {eachAnimal.name} 
                    {/* {eachAnimal.color} */}
                    <button onClick={() => this.props.deleteTheAnimal(i)}>Delete</button>
                </li>
            )
        })

        return animalList
    }

    render() {
        return (
            <div className='animal'>
                {this.showAnimals()}
            </div>
        );
    }
}

export default Animal;