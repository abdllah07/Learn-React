import { useEffect, useState , useRef } from 'react'


// to selecet a element 
//  

export const Ref = () => {


  const lastsec = useRef()
  const firstsec = useRef()

  const down = ()=> {

    lastsec.current.scrollIntoView({
      behavior:"smooth" ,
      block:"start"
    })

  }
  const up = ()=> {
    firstsec.current.scrollIntoView({
      behavior:"smooth",
      block:"start"

    })
  }



  const [render , setRender ] = useState(0)


  const count = useRef(0)

  useEffect(()=>{
    count.current = count.current + 1
    console.log(count.current)
  } ,[render])


  return (

    <>

<button onClick={()=> {setRender(prev => prev + 1 )}}>Update</button>

    <button onClick={down}>Go down</button>
    <h1>{render}</h1>




    <div>Ref</div>


    <section ref={firstsec}>
    <img width="200px" className='' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt=''/>
    <p>loream ipsum </p>


    </section>
    
    <section>
    <img width="200px" className='' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt=''/>
    <p>loream ipsum </p>


    </section>
    
    <section>
    <img width="200px" className='' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt=''/>
    <p>loream ipsum </p>


    </section>
    
    <section>
    <img width="200px" className='' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt=''/>
    <p>loream ipsum </p>


    </section>
    
    <section ref={lastsec}>
    <img width="200px" className='' src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt=''/>
    <p >loream ipsum </p>


    </section>
    <button onClick={up}>Go Up</button>


    </>
  )
}
