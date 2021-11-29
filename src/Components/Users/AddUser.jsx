import React from "react";
import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUserAge.trim().length === 0 || enteredUsername.trim().length === 0){   
        return;
    }

    if(+enteredUserAge < 1){
        return;
    }

    console.log(enteredUsername, enteredUserAge);
    setEnteredUserAge(" ");
    setEnteredUserAge(" ");
  };

  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };
  return (
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
  );
};

export default AddUser;
