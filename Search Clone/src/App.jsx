import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './component/Container';
import Heading from './component/Heading';
import Display from './component/Display';
import Message from './component/Message';
import ListItems from './component/ListItems';
import { useState } from 'react'



function App() {

  // const city =[]
  const [city, setCity] = useState([ ])

  const screen = (event) =>{
    if(event.key === 'Enter'){
      const newCity = (event.target.value)
      const cit = [...city, newCity]
      setCity(cit)
    }
    console.log(event.target.value)
  }



  return(
    <Container>
    <Heading></Heading>
    <Display screen= {screen}></Display>
    <Message city={city}></Message>
    <ListItems city={city}></ListItems>
    </Container>




    
        
  )
}

export default App
