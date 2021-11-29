import React from "react";
import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [error , setError] = useState('') 
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUserAge.trim().length === 0 || enteredUsername.trim().length === 0){ 
      setError({
        title:'Invalid Input',
        message:'Please enter a name and age (non-empty values)'
      });
        return;
    }

    if(+enteredUserAge < 1){
      setError({
        title:'Invalid Age',
        message:'Please enter a valid age (>0).'
      });
        return;
    }

    props.onAddUser(enteredUsername , enteredUserAge)
    setEnteredUserAge("");
    setEnteredUserAge("");
  };

  
  

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const errorHandler = () =>{
    setError(null)
  }
  return (
    <div>
      {error && <ErrorModal title = {error.title} message = {error.message} onConfirm = {errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={userNameChangeHandler}
        />

        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          value={enteredUserAge}
          onChange={userAgeChangeHandler}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>

    </div>
      );
};

export default AddUser;
