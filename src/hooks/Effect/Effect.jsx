import { useEffect, useState } from 'react'

export const Effect = () => {


    const [inputValue , setInputValue] =  useState('')

    const [users , setUsers] =  useState([])
    const [filteredUsers , setFilteredUsers ] = useState([])


    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))


        return ()=> {
            return false
        }
    } , [])
  

    useEffect(()=> {
        setFilteredUsers(users)
    } , [users])

    useEffect(()=> {
        const filter = users.filter(users => users.name.toLowerCase().includes(inputValue) )
        setFilteredUsers(filter)
    
    } , [inputValue])







  return (
    <>
    {/* <input type='text' className='search' onInput={e=>setInputValue(e.target.value)}></input>
    {filteredUsers.map(
        users => <h3 key={users.id}>{users.name}  </h3> 
        )} */}
    </> 
     )
}



export default Effect