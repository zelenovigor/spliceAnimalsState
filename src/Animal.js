import React, { Component } from 'react';

class Animal extends Component {

    state = {

    }

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

    handleSubmit = e => {
        e.preventDefault()
        console.log('submit', this.state)
        this.props.addTheAnimal(this.state)
    }

    handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]:e.target.value  //name : 'lion' &&& color: 'yellow'
        })
    }

    render() {
        return (
            <div className='animal'>


                {this.showAnimals()}

                <form onSubmit={this.handleSubmit}>
                    <input name="name" onChange={this.handleChange} type="text" placeholder="animal name"/>
                    <input name="color" onChange={this.handleChange} type="text" placeholder="animal color"/>

                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default Animal;