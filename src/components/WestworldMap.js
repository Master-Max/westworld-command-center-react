import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area';

const WestworldMap = (props) => {

  const areaMapper = () => {
    let areas = props.areas.map( areaObj => <Area key={areaObj.name} limit={areaObj.limit} name={areaObj.name} hosts={[props.hosts[0]]}/> )
    return (areas)
  }


  return (
    <Segment id="map" >
      {/* What should we render on the map? */
        areaMapper()
      }
    </Segment>
  )
}

export default WestworldMap
