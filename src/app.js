'use strict'

import React, { Component } from 'react'
import Title from './components/Title/title'
import Button from './components/Button/buttonIndex'
import Square from './components/Square/squareIndex'

class App extends Component {
  render () {
    this.props
    return (     
      <div className='container' onClick={(e) => {
        alert('ok')
      }}>
      <div> 
        {['blue', 'red', 'gray'].map((square) => (
         <Square key={square} color={square} /> 
        ))}
      </div>
      <Title name='Nayara' lastname='Ferreira' />     
      <div className='container' id='1'>
        <Button> 
          <span> tex</span>  
        </Button>
      </div>
    </div> 
    )
  }
}

export default App
