import React, { useState  } from 'react'
import User from './User'
import UserContext  from './UserContext'


//  used for tranfer a state or variable from com to com 



const Context = () => {



    const [userOne , setUserOne ] = useState("Abdullah")


   const  userValues = {userOne , setUserOne}

  return (
    <UserContext.Provider value={userValues}>
        <User></User>
    </UserContext.Provider>
  )
}

export default Context