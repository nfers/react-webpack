'use strict'

import React, { Component } from 'react'
//import Timer from './components/Timer/index'
import Title from './components/Title/title'
import Button from './components/Button/buttonIndex'
import Square from './components/Square/squareIndex'

class App extends Component {
   constructor () {
  //   console.log('constructor')
     super()
     this.state = {
      value: 'Inicio', 
      checked: false
     }
   }
  render () {
    return (     
      <div>
        <form>
          <input type='text' value={this.state.value} 
            onChange={(e) => {
              this.setState({
                value: e.target.value
            })
          }}/>
          <label>
            <input type='checkbox' 
              value='my-checkbox' 
              checked={this.state.checked}
              onChange={(e) => {
                this.setState({ checked: !this.state.checked })}}/>
            Check
          </label>
        </form>
      </div>
/*
        { <Square color={this.state.color}/>

        {['red', 'purple', 'green'].map((color) => (
          <Button 
          key={color} 
          handleClick={() => this.setState({ color })}>
            {color} </Button>
        ))} } */
    )
  }
}

export default App
