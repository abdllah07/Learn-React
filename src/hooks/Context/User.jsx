import React from 'react'
import Card from './Card'
import { CureenUser } from './CureenUser'
import { Button } from './Button'

const User = (props) => {
  return (
    <Card>
     <CureenUser></CureenUser>
     <Button></Button>
    </Card>
  )
}

export default User