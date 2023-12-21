import React from 'react'
import {useContext} from 'react'
import { UserContext } from './UserContext'


export const CureenUser = () => {

    const {userOne} = useContext(UserContext)

  return (
    <div>{userOne}</div>
  )
}
