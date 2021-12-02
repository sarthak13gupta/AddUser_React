import React from 'react';
import { useState , Fragment } from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {

  const [usersList , setUsersList] = useState([])

  const onAddUserHandler = (uName , uAge) => {

    setUsersList((prevUsersList) => {
      return [...prevUsersList , {name: uName , age: uAge , id: Math.random().toString()} ]
    })
  }
  return (
    <Fragment>

      <AddUser onAddUser = {onAddUserHandler}/>
      <UsersList users = {usersList}></UsersList>

    </Fragment>
  );
}

export default App;
