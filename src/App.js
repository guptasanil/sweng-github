import React, { useEffect, useState} from 'react';
import { Form } from 'semantic-ui-react';
import './App.css';
import UserCard from '../src/Components/UserCard'
import BarChart from './Components/BarChart'
import PieChart from '../src/Components/PieChart'
import getRepos from '../src/Api/GetRepos'
import getLanguages from '../src/Api/GetLanguages'

export {BarChart, PieChart};






function App() {

  const [userInput, setUserInput] = useState('guptasanil');
  const [userName, setUserName] = useState('guptasanil');
  const [repos, setRepos] = useState([])
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    handleSubmit();
    updateLanguageInfo('College')
    ;
  }, []);
  
  const handleSearch = (e) => {
    setUserInput(e.target.value)
    }


async function handleSubmit() {
  setUserName(userInput)
  let temp = await getRepos(userInput);
  setRepos(temp);
  

}

async function updateLanguageInfo(name){
    let tempLanguages = await getLanguages(userName, name);
    setLanguages(tempLanguages);
    
    
    
  
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
      <div>
          {repos.map((x) => (
              <div key={x.name}>
                  <button
                      className="list-button"
                      onClick={() => {
                          console.log(x.name)
                          updateLanguageInfo(x.name)
                      }}
                  >
                      {x.name}
                  </button>
              </div>
          ))}
      </div>   
      <BarChart></BarChart>
      <PieChart passedData={languages} />
      <div id="chart-container"></div>
     
      
       
 

    </div> 
      
    
  );
}

export default App;