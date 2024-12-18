import React, { useState } from "react";
import "./DynamicForm.scss";

const DynamicForm = ({ config }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {config.map((field) => {
        if (field.type === "select") {
          return (
            <div key={field.name} className="select-list">
              <label>{field.label}</label>
              <select
                name={field.name}
                onChange={handleChange}
                required={field.required}
              >
                <option value="">Select</option>
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          );
        }
        return (
          <div key={field.name}>
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              onChange={handleChange}
              required={field.required}
            />
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
