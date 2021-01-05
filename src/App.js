import React, { useEffect, useState} from 'react';
import { Form } from 'semantic-ui-react';
import './App.css';
import UserCard from '../src/Components/UserCard'
import BarChart from './Components/BarChart'
import PieChart from '../src/Components/PieChart'
import getRepos from '../src/Api/GetRepos'
import styled from "styled-components";

export {BarChart, PieChart};

function App() {
  const [userInput, setUserInput] = useState('guptasanil');
  const [userName, setUserName] = useState('guptasanil');
  const [repos, setRepos] = useState([])
  const [dispRepo, setDispRepo] = useState('College');

  const Button = styled.button`
  background-color: white;
  color: grey;
  font-size: 10px;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 5px 0px;
  cursor: pointer;
  margin: spacing,
  border: 2px solid palevioletred;
  border-radius: 5px;
  
  
  
`;

  useEffect(() => {
    handleSubmit();
  }, []);
  
  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  async function handleSubmit() {
    setUserName(userInput)
    let temp = await getRepos(userInput);
    setRepos(temp);
  }

  return(
    <div>
      <div className= 'navbar'>Github Search</div> 
      <div className= 'search'>
            <Form onSubmit = {handleSubmit}>
              <Form.Group>
                <Form.Input placeholder='Search Github User' name='Search Github User' onChange = {handleSearch} /> 
                <Form.Button content='Search' />
              </Form.Group>
            </Form>
          </div>
      <UserCard data = {userName} /> 
      <div onClick={() => {}}>
          {repos.map((x) => (
              <div key={x.name}>
                  <Button className = "button"
                      
                      className="list-button"
                      onClick={() => {
                        setDispRepo(x.name);
                      }}
                  >
                      {x.name}
                  </Button>
              </div>
          ))}
      </div>
      <PieChart user={userName} repo={dispRepo}/>

    </div>
  );
}

export default App; 