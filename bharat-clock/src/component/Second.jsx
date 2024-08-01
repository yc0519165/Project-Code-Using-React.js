import { useEffect } from "react"
import { useState } from "react"

const Second = () =>{

 const [time, setTime] = useState( new Date())

 useEffect (() =>{
  const interval =  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return () =>{
    clearInterval(interval);
  }
 }, []);


  return  <span className='second'>This is the Current Time:{time.toLocaleDateString()}-{time.toLocaleTimeString()}</span>

}
export default Second