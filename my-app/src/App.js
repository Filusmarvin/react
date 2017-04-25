import React, { Component } from 'react';
//import React from 'react';
//import React.Component as Component from 'react';
import logo from './logo.svg';
import './App.css';

/*function App () {
  Component.call(this)
}
App.prototype = Object.create(Component.prototype)
App.prototype.render = function () {
  return (
    <div className="....">
  )
}*/
class App extends Component {

  constructor () {
    super()
    this.state = {
      text: ''
    }
  }

  overflowAlert(){
    if( this.remainingCharacters() < 0 ){
      return <div> <strong>'You are making tooo much. Nooooooo! '
      'I dont wanna do this any more!!!! Stop Stop Stop Stop. It Hurts.........')
    </strong> </div>
    }
  };
  handleChange (event) {
    console.log(event.target.value)
    console.log(this.state)
    this.setState({
      text: event.target.value,
      photoAdded: false,

     });
  }


  disableCheck () {
    return this.state.text.length === 0 && ! this.state.photoAdded
  }

  togglePhoto () {
    this.setState({ photoAdded: !this.state.photoAdded });
  }

  remainingCharacters (){
    if(this.state.photoAdded){
      return 140 - 23 - this.state.text.length
    }
      return 140 - this.state.text.length
  }

  render() {
    return (
      <div className="well clearfix">
      { this.overflowAlert() }
        <textarea
          onChange={this.handleChange.bind(this)}
          className="form-control"></textarea>
        <br/>
        <button className="btn btn-primary pull-right" disabled={this.disableCheck()}>Tweet</button>
        <button className="btn btn-default pull-right" onClick={this.togglePhoto.bind(this)} > {this.state.photoAdded ? "✓ Photo Added" : "Add Photo"} </button>
        <span>{this.remainingCharacters() }</span>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
