import { useEffect, useState } from 'react';
import api from '../services/api';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const response = await api.get('/employees');
    setEmployees(response.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    await api.delete(`/employees/${id}`);
    fetchEmployees();
  };

  return (
    <div>
      <h2>Employees</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Position</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>
                <button onClick={() => deleteEmployee(employee.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
