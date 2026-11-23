function EmployeeCard(props) {
  return (
    <div className="employee-card">
      <h2>{props.name}</h2>

      <p>Employee ID: {props.id}</p>
      <p>Department: {props.department}</p>
      <p>Salary: ₹{props.salary}</p>
    </div>
  );
}

export default EmployeeCard;