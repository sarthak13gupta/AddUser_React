import React from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {
  return (
    <div>

      <AddUser></AddUser>
      <UsersList users = {[]}></UsersList>

    </div>
  );
}

export default App;
