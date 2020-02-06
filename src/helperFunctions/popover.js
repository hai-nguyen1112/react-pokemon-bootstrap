import React from 'react'
import Popover from 'react-bootstrap/Popover'

export default function(text) {
  return (
    <Popover id="popover-basic">
      <Popover.Content style={{fontFamily: "'Open Sans Condensed', sans-serif", fontSize: "20px"}}>
        {text}
      </Popover.Content>
    </Popover>
  )
}
