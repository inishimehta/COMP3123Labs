import React, { Component } from 'react'

export default class EmployeeClass extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: "NO Name"
        }
    }

                                                                                                                                                                                                                                         btnClick = function(event) {
        event.preventDefault()
        alert('Button Clicked')
    }

    onChangeName = function(event) {
        event.preventDefault()
        // console.log(event)
        // this.setState({
        //     ...this.state, 
        //     name:event.targate.value
        // })

        this.setState((prevState) => ({
            ...prevState, 
            name:event.targate.value
        }))
    }

  render() {
    return (
        <div>
            <h1>Employee Class Component</h1>
            <button onClick={(e) => this.btnClick(e)}>Show Alert</button>
            <p>Name: {this.state.name}</p>
            <input type='text' 
                name="txtName" 
                placeholder='Enter Name' 
                onChange={(e) => this.onChangeName(e)}/>
        </div>
  )
  }
}
