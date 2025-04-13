import { useState } from "react";

function ExpenseForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every((field) => field.trim())) {
      onSubmit({
        ...formData,
        amount: parseFloat(formData.amount),
      });
      setFormData({
        name: "",
        category: "",
        description: "",
        amount: "",
        date: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add expense</h2>
      <p>Enter your expense details below</p>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name of expense"
        required
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Bills">Bills</option>
        <option value="Other">Other</option>
      </select>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter expense description"
        required
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Enter amount"
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;
