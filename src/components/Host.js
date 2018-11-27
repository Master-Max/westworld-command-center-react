import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const test = (tmp) => {
  if(tmp){
    // console.log(tmp)
    // console.log(tmp.imageUrl)
    return (tmp.imageUrl)
    // debugger
  }
}

const Host = (props) => {

  {/* NOTE: The className "host selected" renders a different style than simply "host". */}

  return(
    <Card
      className="host selected"
      onClick={() => console.log("clack")}
      image={test(props.data)}
      raised
    />
  )
}

export default Host
