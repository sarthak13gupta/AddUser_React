import React, { useRef } from "react";
import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [error, setError] = useState("");
  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredUserAge, setEnteredUserAge] = useState("");
  
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value 

    // console.log(enteredName , enteredAge)

    if (
      enteredAge.trim().length === 0 ||
      enteredName.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a name and age (non-empty values)",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    // setEnteredUserAge("");
    // setEnteredUserAge("");
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  // const userNameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };

  // const userAgeChangeHandler = (event) => {
  //   setEnteredUserAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredName}
            // onChange={userNameChangeHandler}
            ref = {nameInputRef}
          />

          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={userAgeChangeHandler}
            ref = {ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
