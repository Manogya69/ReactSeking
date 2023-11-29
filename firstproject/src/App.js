import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: "e1", title: "Laptop", amount: 75000, date: new Date(2020, 0, 15) },
  { id: "e2", title: "Chair", amount: 7000, date: new Date(2020, 1, 15) },

  { id: "e3", title: "Headphones", amount: 3000, date: new Date(2020, 2, 3) },
  { id: "e4", title: "Webcam", amount: 1500, date: new Date(2020, 3, 10) },

  { id: "e5", title: "Monitor", amount: 25000, date: new Date(2020, 4, 15) },
  { id: "e6", title: "Mouse", amount: 1200, date: new Date(2020, 5, 20) },

  { id: "e7", title: "Printer", amount: 15000, date: new Date(2020, 6, 5) },
  { id: "e8", title: "Desk Lamp", amount: 2500, date: new Date(2020, 7, 12) },

  { id: "e9", title: "VR Headset", amount: 8000, date: new Date(2020, 8, 18) },
  { id: "e10", title: "Keyboard", amount: 3000, date: new Date(2020, 9, 18) },

  { id: "e11", title: "MousePad", amount: 500, date: new Date(2020, 10, 15) },
  { id: "e12", title: "Desk", amount: 11000, date: new Date(2020, 11, 18) },

  {
    id: "e13",
    title: "Gaming PC",
    amount: 100000,
    date: new Date(2021, 0, 15),
  },
  {
    id: "e14",
    title: "Gaming Chair",
    amount: 20000,
    date: new Date(2021, 1, 15),
  },

  {
    id: "e15",
    title: "External SSD",
    amount: 3000,
    date: new Date(2021, 2, 3),
  },
  {
    id: "e16",
    title: "Wireless Mouse",
    amount: 1500,
    date: new Date(2021, 3, 10),
  },

  {
    id: "e17",
    title: "4K Monitor",
    amount: 25000,
    date: new Date(2021, 4, 15),
  },
  {
    id: "e18",
    title: "Mechanical Keyboard",
    amount: 12000,
    date: new Date(2021, 5, 20),
  },

  {
    id: "e19",
    title: "Color Printer",
    amount: 15000,
    date: new Date(2021, 6, 5),
  },
  {
    id: "e20",
    title: "Desk Organizer",
    amount: 2500,
    date: new Date(2021, 7, 12),
  },

  {
    id: "e21",
    title: "Wireless Headphones",
    amount: 8000,
    date: new Date(2021, 8, 18),
  },
  { id: "e22", title: "Desk Chair", amount: 3000, date: new Date(2021, 9, 18) },

  { id: "e23", title: "Desk Lamp", amount: 500, date: new Date(2021, 10, 15) },
  {
    id: "e24",
    title: "Bookshelf",
    amount: 11000,
    date: new Date(2021, 11, 18),
  },

  {
    id: "e25",
    title: "Smartphone Upgrade",
    amount: 80000,
    date: new Date(2022, 0, 15),
  },
  {
    id: "e26",
    title: "Office Desk",
    amount: 15000,
    date: new Date(2022, 1, 15),
  },

  {
    id: "e27",
    title: "Noise-Canceling Earbuds",
    amount: 2000,
    date: new Date(2022, 2, 3),
  },
  {
    id: "e28",
    title: "Portable Projector",
    amount: 50000,
    date: new Date(2022, 3, 10),
  },

  {
    id: "e29",
    title: "Ultra-Wide Monitor",
    amount: 80000,
    date: new Date(2022, 4, 15),
  },
  {
    id: "e30",
    title: "Mechanical Gaming Mouse",
    amount: 8000,
    date: new Date(2022, 5, 20),
  },

  {
    id: "e31",
    title: "3D Printer",
    amount: 100000,
    date: new Date(2022, 6, 5),
  },
  { id: "e32", title: "Desk Fan", amount: 4000, date: new Date(2022, 7, 12) },

  {
    id: "e33",
    title: "Fitness Tracker",
    amount: 1500,
    date: new Date(2022, 8, 18),
  },
  {
    id: "e34",
    title: "Digital Drawing Tablet",
    amount: 11000,
    date: new Date(2022, 9, 18),
  },

  {
    id: "e35",
    title: "Coffee Maker",
    amount: 5000,
    date: new Date(2022, 10, 15),
  },
  {
    id: "e36",
    title: "Adjustable Standing Desk",
    amount: 8000,
    date: new Date(2022, 11, 18),
  },

  {
    id: "e37",
    title: "High-Performance Graphics Card",
    amount: 120000,
    date: new Date(2023, 0, 15),
  },
  {
    id: "e38",
    title: "Executive Office Chair",
    amount: 5000,
    date: new Date(2023, 1, 15),
  },

  {
    id: "e39",
    title: "Wireless Gaming Headset",
    amount: 4500,
    date: new Date(2023, 2, 3),
  },
  {
    id: "e40",
    title: "Ultrawide Curved Monitor",
    amount: 80000,
    date: new Date(2023, 3, 10),
  },

  {
    id: "e41",
    title: "Smart Home Hub",
    amount: 20000,
    date: new Date(2023, 4, 15),
  },
  {
    id: "e42",
    title: "Bluetooth Mechanical Keyboard",
    amount: 1000,
    date: new Date(2023, 5, 20),
  },

  {
    id: "e43",
    title: "Smart Thermostat",
    amount: 12000,
    date: new Date(2023, 6, 5),
  },
  {
    id: "e44",
    title: "Desk Exercise Bike",
    amount: 2500,
    date: new Date(2023, 7, 12),
  },

  {
    id: "e45",
    title: "Digital Nomad Backpack",
    amount: 8000,
    date: new Date(2023, 8, 18),
  },
  {
    id: "e46",
    title: "Wireless Charging Pad",
    amount: 4500,
    date: new Date(2023, 9, 18),
  },

  {
    id: "e47",
    title: "Robot Vacuum Cleaner",
    amount: 30000,
    date: new Date(2023, 10, 15),
  },
  {
    id: "e48",
    title: "Dual Monitor Arm Mount",
    amount: 15000,
    date: new Date(2023, 11, 18),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
