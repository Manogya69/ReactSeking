import Expenses from "./components/Expenses/Expenses";
import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Gaming PC",
    amount: 100000,
    date: new Date(2023, 11, 27),
  },
  {
    id: "e2",
    title: "Gaming Chair",
    amount: 20000,
    date: new Date(2023, 11, 25),
  },
  { id: "e3", title: "Gaming Table", amount: 20000, date: new Date(2023, 11, 23) },
  { id: "e4", title: "PS4", amount: 25000, date: new Date(2023, 11, 22) },
];

function App() {
  
  const [expenses, setExpenses] =useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense =>{
   setExpenses(prevExpenses => {
    return [expense, ...prevExpenses];
   });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
