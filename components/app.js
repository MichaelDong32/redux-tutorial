import React, { Component } from 'react'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    console.log(this.props.store)
    return <h1>Welcome to {this.props.name}</h1>
  }

}

export default App
