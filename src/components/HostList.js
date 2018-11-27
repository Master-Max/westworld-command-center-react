import React from 'react'
import { Card } from 'semantic-ui-react'

import Host from './Host'

const test = (props) => {
  console.log("FUCK!");
  console.log(props.hosts)
}

const hostMapper = (hosts) => {
  return (hosts.map( host => <Host data={host}/> ))
}

const HostList = (props) => {

  return(
    <Card.Group itemsPerRow={6}>
      {hostMapper(props.hosts)}
    </Card.Group>
  )
}

export default HostList
