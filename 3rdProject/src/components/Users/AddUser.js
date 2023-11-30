import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const AddUserHandler = (event) => {
    event.preventDefault();

    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ){
      return;
    }

    if(+enteredAge < 1){
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />

        <label htmlFor="age">Age (Years)</label>
        <input id="age" value={enteredAge} type="number" onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
