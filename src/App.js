import React, {UseState, useEffect, useState} from 'react';
import { Form, Card, Image, Icon } from 'semantic-ui-react';
import './App.css';
import UserCard from '../src/Components/UserCard'






function App() {

  const [userInput, setUserInput] = useState('guptasanil');
  const [userName, setUserName] = useState('guptasanil');
  
  const handleSearch = (e) => {
    setUserInput(e.target.value)

}

const handleSubmit = () => {
  setUserName(userInput)
}
  

  return(
    <div>
      <div className= 'navbar'>Github Search</div> 
      <div className= "search">
            <Form onSubmit = {handleSubmit}>
              <Form.Group>
                <Form.Input placeholder='Search Github User' name='Github User' onChange = {handleSearch} /> 
                <Form.Button content='Search' />
              </Form.Group>
            </Form>
          </div>
      <UserCard data = {userName} />    
      
       
 

    </div> 
      
    
  );
}

export default App;

