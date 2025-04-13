import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <p>
        Start taking control of your finances and life. Record, Categorize and
        analyse your spending
      </p>
      <div className="content-div">
        <div className="form-div">
          <ExpenseForm onSubmit={addExpense} />
        </div>

        <div className="table-div">
          <input
            type="text"
            placeholder="Search Your Expense here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ExpenseTable expenses={filteredExpenses} />
        </div>
      </div>
    </div>
  );
}

export default App;
