import React, { useState } from "react";

const FormComponent = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setSubmittedData((prev) => [...prev, form]);
    setForm({ name: "", email: "", });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter name"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {submittedData.map((item, index) => (
          <li key={index}>
            Name: {item.name} Email: {item.email} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormComponent;
