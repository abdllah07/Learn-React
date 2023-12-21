// import {useReducer} from 'react'

// const Reducer = () => {


//     const initialState = {count : 0 }


//     const reducer = (state , action)=>{

//         switch(action.type){
//             case 'up' : return {count: state.count + 1} 
//             case 'down' : return {count: state.count - 1} 
//             case 'reset' : return {count: 0} 
//             default:return state;
//         }

        
//     }






//     const [state, dispatch] = useReducer(reducer , initialState)


//   return (
    
//     <>
    
//     <div>{state.count}</div>

//     <button onClick={()=> {dispatch({type:'up'})}}>Up</button>
//     <button onClick={()=> {dispatch({type:'down'})}}>down</button>
//     <button onClick={()=> {dispatch({type:'reset'})}}>reset</button>

//     </>

//   )
// }

// export default Reducer



import React from 'react'
import {useReducer} from 'react'

 const Reducer = () => {

    const initialState = {
        username : "" , 
        email : "" , 
        notes : "",
    }



    const reducer =  (state , action)=> {
        switch(action.type){
            case "input" : return { ...state,[action.field] : action.value} ; 
            case "reset" : return initialState ;
            default : return state;
        }
    }

    const [state , dispatch] = useReducer(reducer , initialState)


    const handelRest = ()=> {
        dispatch({type: "reset"})
    }
    const handelChange = (e)=>{
        dispatch({
            type:'input', 
            field:e.target.name , 
            value : e.target.value, 
        })
    }


    const handelSubmit = (e)=> {
        e.preventDefault();
        console.log(state)
        return state
    }
  return (

    <form onSubmit={handelSubmit}>
        <label>User name
            <input type="text" name="username" value= {state.username} onChange={handelChange}/>
        </label>
        <br></br>
        <label>Email
            <input type="email" name="email" value= {state.email} onChange={handelChange}/>
        </label>
        <br></br>

        <label>Notes
            <input type="notes" name="notes" value= {state.notes} onChange={handelChange}/>
        </label>
        <br></br>

        <button type='submit' >submit</button>
        <button type='button' onClick={handelRest}>Reset</button>

    </form>
  )
}
export default Reducer