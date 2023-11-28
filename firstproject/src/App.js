import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
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

  const addExpenseHandler = expense =>{
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
