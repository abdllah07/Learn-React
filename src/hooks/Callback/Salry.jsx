import React from 'react'

export const Salry = (props) => {
    console.log("salary")

  return (
    <div>{props.salary}</div>
  )
}

export default React.memo(Salry)


