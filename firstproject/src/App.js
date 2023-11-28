import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Junk Food",
      amount: 1000,
      date: new Date(2023, 11, 27),
    },
    {
      id: "e2",
      title: "Chiya Churot",
      amount: 500,
      date: new Date(2023, 11, 25),
    },
    { id: "e3", title: "Weed", amount: 1500, date: new Date(2023, 11, 23) },
    { id: "e4", title: "Gadi Vada", amount: 500, date: new Date(2023, 11, 22) },
  ];

  return (
    <div>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
