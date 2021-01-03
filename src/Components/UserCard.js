import { Form, Card, Image, Icon } from 'semantic-ui-react';
import React, { useEffect, useState} from "react";
import "../App.css";
import { BarChart } from '../App';

export { BarChart };

function UserCard ({ data }){


  const [name, setName] = useState(' ');
  const [userName, setUserName] = useState(' ');
  const [followers, setFollowers] = useState(' ');
  const [following, setFollowing] = useState(' ');
  const [repos, setRepos] = useState(' ');
  const [avatar, setAvatar] = useState(' ');
 
  const [error, setError] = useState(null);
  const [user, setUser] = useState('guptasanil');
  



  useEffect(() => { 
    getData();
  }, [ data ]);

  const getData = () => {
    fetch(`https://api.github.com/users/${data}`)
    .then (res => res.json())
    .then (data => {
      if(data.message) {
        setError(data.message)
      }
      else{
      setData(data);
      setError(null)
      }
    }
    )
    
  }

  const setData = ({ name, login, followers, following, public_repos, avatar_url}) => {
      setName(name)
      setUserName(login)
      setFollowers(followers)
      setFollowing(following)
      setRepos(public_repos)
      setAvatar(avatar_url)
      
      
      


  }
        return(
            <Card>
          <Image src={avatar} wrapped ui={false} />
            <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Header>{userName}</Card.Header>
     
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {followers} followers
      </a>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {repos} repos
      </a>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {following} following
      </a>
    </Card.Content>
  </Card>
  
  

        )

    }


export default UserCard;