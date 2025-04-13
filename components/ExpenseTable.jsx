// components/ExpenseTable.jsx
import React from "react";
// import "./ExpenseTable.css";

function ExpenseTable({ expenses }) {
  if (expenses.length === 0) {
    return <p>You don't have any expenses recorded yet.</p>;
  }

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.category}</td>
            <td>{expense.description}</td>
            <td>ksh{expense.amount}</td>
            <td>{new Date(expense.date).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
