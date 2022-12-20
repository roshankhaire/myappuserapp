import logo from './logo.svg';
import './App.css';
import AddUser from './components/Users/AddUser';

import UsersList from './components/Users/UsersList';
import React,{useState,Fragment} from 'react';

function App() {
  const [usersList,setUserslist]=useState([]);
  const addUserHandler=(uName,uAge,ucollage)=>{
    setUserslist((prevUsersList)=>{
      return[...prevUsersList,{name:uName} ,{age:uAge},{collage:ucollage}]
    })

  }
  return (
    <React.Fragment>
     <AddUser onAddUser={addUserHandler}/>
     <UsersList users={usersList}/>
    </React.Fragment>
  );
}

export default App;
