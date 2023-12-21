import { useMemo, useState } from "react"




// use for more performanse 
const Memo = () => {


    const [counterOne , setCounterOne] = useState(0) 
    const [counterTow , setCounterTow] = useState(0) 


    const changeOne = () => {setCounterOne(prev => prev + 1)}
    const changeTow = () => {setCounterTow(prev => prev - 2)}



   const isEven =  useMemo(() => {
    return counterOne % 2 === 0 
    }, [counterOne])



  return (
    <div>
        <h1>Memo</h1>

        <button onClick={changeOne} >{counterOne}</button>
        {isEven? 'Even' : 'Odd'}
        <button onClick={changeTow}>{counterTow}</button>

    </div>
  )
}

export default Memo