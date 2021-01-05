import React, { useEffect, useState} from 'react';
import { Form } from 'semantic-ui-react';
import './App.css';
import UserCard from '../src/Components/UserCard'
import BarChart from './Components/BarChart'
import PieChart from '../src/Components/PieChart'
import getRepos from '../src/Api/GetRepos'

export {BarChart, PieChart};

function App() {
  const [userInput, setUserInput] = useState('guptasanil');
  const [userName, setUserName] = useState('guptasanil');
  const [repos, setRepos] = useState([])
  const [dispRepo, setDispRepo] = useState('College');

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
      <div className= "search">
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
                  <button
                      className="list-button"
                      onClick={() => {
                        setDispRepo(x.name);
                      }}
                  >
                      {x.name}
                  </button>
              </div>
          ))}
      </div>
      <PieChart user={userName} repo={dispRepo}/>
      <BarChart />
    </div>
  );
}

export default App; 