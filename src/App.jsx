
import { useState } from "react";
import "./App.css";

function EmployeeCard({ id, name, department, salary }) {
  return (
    <div className="employee-card">
      <h2>{name}</h2>
      <p>Employee ID: {id}</p>
      <p>Department: {department}</p>
      <p>Salary: ₹{salary}</p>
    </div>
  );
}

function App() {
  const employees = [
    { id: "EMP101", name: "Rahul", department: "IT", salary: 50000 },
    { id: "EMP102", name: "Priya", department: "HR", salary: 45000 },
    { id: "EMP103", name: "Arjun", department: "Finance", salary: 55000 },
    { id: "EMP104", name: "Sneha", department: "Marketing", salary: 48000 }
  ];

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const filteredEmployees = employees.filter((employee) => {
    const matchesName = employee.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" || employee.department === department;

    return matchesName && matchesDepartment;
  });

  return (
    <div className="container">
      <h1>Employee Directory</h1>

      <input
        type="text"
        placeholder="Search employee by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="All">All Departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
      </select>

      <div className="employee-list">
        {filteredEmployees.map((employee) => (
          <EmployeeCard key={employee.id} {...employee} />
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <p>No employees found.</p>
      )}
    </div>
  );
}

export default App;
