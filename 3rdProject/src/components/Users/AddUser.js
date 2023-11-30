import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className = {classes.input}>
    <form onSubmit={AddUserHandler}>
      <label htmlFor="username">UserName</label>
      <input id="username" type="text" />

      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" />
      <Button type="submit">Add User</Button>
    </form>
    </Card>
  );
};

export default AddUser;
