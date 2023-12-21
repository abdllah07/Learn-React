import { UserContext } from './UserContext'
import {useContext} from 'react'

export const Button = () => {

    const {setUserOne} = useContext(UserContext)

  return (
    <button onClick={
        ()=> {setUserOne("Hazem");
    }}>Update User</button>
  )
}
