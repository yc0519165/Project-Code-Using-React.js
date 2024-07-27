import ListItem from './ListItem'
import styles from './ListItems.module.css'
import { useState } from 'react'

const ListItems = ( {city} ) =>{

  const [addCity, setAddCity] = useState('')

  const onSelectBtn = (cites, event)=>{
    const newCity = [...addCity, cites]
    setAddCity(newCity)
  }
  
  

  return(
    <ul className={`${styles.group} list-group`}>
    {city.map((cites) =>(
       <ListItem key={cites} 
       cites={cites}
       select = {addCity.includes(cites)}
       onButton = {(event) => onSelectBtn(cites, event)}

        ></ListItem>
    ))}
  </ul>

  )
}
export default ListItems