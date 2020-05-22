import React, {useEffect, useState} from 'react';
import { Link } from 'react-router';


const User = (props) => {
  const {username} = props.params;
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(
            user => {
                setUser(user);
            }
        );

        fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(
            repos => {
                setRepos(repos);
            }
        );
  }, [])
  console.log(user);
  console.log(repos);
  return (
    <div className="user-page">
        <div className="user-info">
            <Link className="user-info__text" to={`/user/${user.login}`}>
                <img className="user-info__avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
                <h2 className="user-info__title">{user.login} ({user.name})</h2>
                <p className="user-info__bio">{user.bio}</p>
            </Link>


            </div>
            {repos.slice(0, 5).map(repo => {
          console.log(repo)

          return <>
            <a href={repo.html_url} target="blank"> {repo.name} </a>
            <br/>
           </>
          
        })}
    </div>
);



}

export default User;