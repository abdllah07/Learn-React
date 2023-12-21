import React from 'react'

const Button = (props) => {
    console.log("button " + props.text)

  return (
    <button onClick={props.action}>{props.text}</button>
  )
}

export default React.memo(Button)
