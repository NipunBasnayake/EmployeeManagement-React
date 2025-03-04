import React, { useState } from 'react';
import './Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Content() {
  const [employeeList, setEmployeeList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const searchEmployee = () => {
    const filteredList = employeeList.filter(employee =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setEmployeeList(filteredList);
  };

  const addEmployee = () => {
    const newEmployee = {
      id: employeeList.length + 1,
      name: 'New Employee',
      position: 'Developer',
      department: 'Engineering',
      salary: '5000',
      dateOfHire: '2025-03-01',
      email: 'newemployee@example.com',
      mobile: '123-456-7890'
    };
    setEmployeeList([...employeeList, newEmployee]);
  };

  return (
    <div className="container">
      <div className="content">
        <div className="search-add-section">
          <input
            type="text"
            id="searchInput"
            className="form-control"
            placeholder="Search Employee..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-primary" onClick={searchEmployee}>Search</button>
          <button className="btn btn-success ms-5" onClick={addEmployee}>+ Add Employee</button>
        </div>

        <div className="card">
          <div className="card-header">Employee List</div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Department</th>
                  <th>Salary</th>
                  <th>Date of Hire</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employeeList.map((employee, index) => (
                  <tr key={employee.id}>
                    <td>{index + 1}</td>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.position}</td>
                    <td>{employee.department}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.dateOfHire}</td>
                    <td>{employee.email}</td>
                    <td>{employee.mobile}</td>
                    <td>
                      <button className="btn btn-info">Edit</button>
                      <button className="btn btn-danger ms-2">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
