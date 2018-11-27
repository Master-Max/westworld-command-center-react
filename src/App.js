import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';

import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters'


const API = "http://localhost:4000/"

class App extends Component {

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  state = {
    areas: [],
    hosts: [],
    selected: '' 
  }

  componentDidMount(){
    fetch(API + 'areas')
    .then(responce => responce.json())
    .then(areas => {
      console.log('Areas Loaded')
      this.setState({ areas })
    })

    fetch(API + 'hosts')
    .then(responce => responce.json())
    .then(hosts => {
      console.log('Hosts Loaded')
      this.setState({ hosts })
    })
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas} hosts={this.state.hosts}/>
        <Headquarters hosts={this.state.hosts}/>
      </Segment>
    )
  }
}

export default App;
