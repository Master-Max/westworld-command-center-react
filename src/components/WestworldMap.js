import React, { Component } from 'react';
import Area from './Area.js';
import { Segment } from 'semantic-ui-react';


class WestworldMap extends Component {
  state = {
    areas: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/areas")
			.then(res => res.json())
			.then(result => {
        this.setState({areas: result}, ()=>{console.log(this.state)})
      })
  }

  renderAreas = () => {

    return this.state.areas.map( area =>
      <Area className="Area"
        className="area"
        areaName={area.name}
        key={area.name}
        style={area.style}
        hosts={this.props.hosts}
        selectedHost={this.state.selectedHost}
        selectHost={this.selectHost}
      />
    )
  }



  render(){
    return (
      <Segment id="map" >
        {this.renderAreas()}
      </Segment>
    )
  }
}

export default WestworldMap;
