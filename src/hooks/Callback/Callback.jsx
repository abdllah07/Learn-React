import { useCallback, useState } from "react"
import { Age } from "./Age"
import Salry from "./Salry"
import Button from "./Button"



// use for call a called combonent not all com
export const Callback = () => {


    const [age , setAge ] = useState(20)
    const [salary , setSalary] = useState(1000)



    const ageUp = useCallback(()=> {
        setAge(age + 1)
    } , [age])

    const salaryUp = useCallback(() => {
        setSalary(salary + 1000 )

    } , [salary])


  return (
    <div>
       <div>
       <Age age={age}/>
        <Salry salary={salary}/>

       </div>


       <div>
        <Button text= "age Up" action = {ageUp}></Button>
        <Button text= "salary Up" action = {salaryUp}></Button>

       </div>
        </div>
  )
}
