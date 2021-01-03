import React, {UseState, useEffect, useState} from 'react';
import { Form, Card, Image, Icon } from 'semantic-ui-react';
import './App.css';
import UserCard from '../src/Components/UserCard'
import BarChart from '../src/Components/BarChart'

export {BarChart};






function App() {

  const [userInput, setUserInput] = useState('guptasanil');
  const [userName, setUserName] = useState('guptasanil');
  
  const handleSearch = (e) => {
    setUserInput(e.target.value)

}

const handleSubmit = () => {
  setUserName(this.state.userInput)
}
  

  return(
    <div>
      <div className= 'navbar'>Github Search</div> 
      <div className= "search">
            <Form onSubmit = {handleSubmit}>
              <Form.Group>
                <Form.Input placeholder='Search Github User' name='Search Github User' onChange = {handleSearch} /> 
                <Form.Button content='Search' />
              </Form.Group>
            </Form>
          </div>
      <UserCard data = {userName} />    
      <BarChart></BarChart>
      
       
 

    </div> 
      
    
  );
}

export default App;