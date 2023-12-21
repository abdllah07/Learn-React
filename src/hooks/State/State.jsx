import { useEffect, useState } from 'react'



// Effect


import React from 'react'

export const State = () => {




  return (
    <div>
    
    </div>
  )
}


export default State





// use State 
// const State = () => {

//   const [posts , setPosts]  = useState()
//   const [postId , setpostId]  = useState(1)

    
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(data => setPosts(data))


//   const up = ()=> setpostId(prev => prev + 1)
//   const down = ()=> setpostId(prev => prev - 1)





//   return (
//     <>
//       <button onClick={up}>+</button>
//       <button onClick={down}>-</button>

//      <div>{
    
//       posts?.map(post => <>
//       {
//       post.id === postId ? 
//       (
//       <>
//       {post.title}
//       <br></br>
//       {post.id}
//       <br></br>
//       {post.body}

//       </>
//       ) 
//       : ("")
//       } 
      
      
//       </>)
//       }</div>
    
//     </>
//   )
// }

// export default State