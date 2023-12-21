import React from 'react'

export const Age = (props) => {
    console.log("age")
  return (
    <div>{props.age}</div>
  )
}


export default React.memo(Age)