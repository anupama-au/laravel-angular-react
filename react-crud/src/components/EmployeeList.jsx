import { useEffect, useState } from 'react';
import api from '../services/api';

function EmployeeList({
  setForm,
  setEditId,
  }) {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  
  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  // const fetchEmployees = async () => {
  //   const response = await api.get('/employees');
  //   setEmployees(response.data);
  // };

  // updating  fetch employees to add pagination
  // const fetchEmployees = async (page = 1) => {
  // const response = await api.get(
  //   `/employees?page=${page}`
  // );

 // updating tech function to add search also
  const fetchEmployees = async (page = 1) => {
  const response = await api.get(
    `/employees?page=${page}&search=${search}`
  );

  setEmployees(response.data.data);
  setCurrentPage(response.data.current_page);
  setLastPage(response.data.last_page);
  };

  // delete modal popup
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  
  const editEmployee = (employee) => {
  setForm({
    name: employee.name,
    email: employee.email,
    phone: employee.phone,
    position: employee.position,
    department: employee.department,
  });

  setEditId(employee.id);

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
  // useEffect(() => {
  //   fetchEmployees();
  // }, []);

  //code changes for pagination
  // useEffect(() => {
  // fetchEmployees(currentPage);
  // }, [currentPage]);
  //added search aslo in pagination
  useEffect(() => {
  fetchEmployees(currentPage);
  }, [currentPage, search]);

  const deleteEmployee = async (id) => {
    await api.delete(`/employees/${id}`);
    fetchEmployees();
  };
  // for delete modal
  const confirmDelete = async () => {
  await api.delete(`/employees/${selectedEmployee}`);
  fetchEmployees(currentPage);//add this line for pagination
  setShowModal(false);
  fetchEmployees();
};

  return (
  <div className="max-w-6xl mx-auto mt-8">
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">

      <div className="p-6 border-b">
        {/* <h2 className="text-2xl font-bold text-gray-800">
          Employees
        </h2> */}
          <div className="p-4">
            <input
              type="text"
              placeholder="Search employees..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full border rounded-lg p-3"
            />
          </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Email</th>
            <th className="text-left p-4">Phone</th>
            <th className="text-left p-4">Position</th>
            <th className="text-left p-4">Department</th>
            <th className="text-left p-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr
              key={employee.id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="p-4 font-medium">
                {employee.name}
              </td>

              <td className="p-4 text-gray-600">
                {employee.email}
              </td>

              <td className="p-4">
                {employee.phone}
              </td>

              <td className="p-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {employee.position}
                </span>
              </td>

              <td className="p-4">
                {employee.department}
              </td>

              <td className="p-4">
                
                <button
                onClick={() => {
                  setSelectedEmployee(employee.id);
                  setShowModal(true);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
              </td>
              <td>
              <button
                onClick={() => editEmployee(employee)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mr-2"
              >
                Edit
              </button>


              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* pagination div */}
      <div className="flex justify-center gap-2 mt-6">

        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="px-4 py-2">
          Page {currentPage} of {lastPage}
        </span>

        <button
          disabled={currentPage === lastPage}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Next
        </button>

      </div>
    </div>

    {/* Delete confirmation modal */}

      {showModal && (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50">
        <div className="bg-white p-6 rounded-lg shadow-xl w-96">
          <h3 className="text-xl font-bold mb-4">
            Delete Employee
          </h3>

          <p className="mb-6">
            Are you sure you want to delete this employee?
          </p>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-gray-300 rounded-lg"
            >
              Cancel
            </button>

            <button
              onClick={confirmDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-lg"
            >
              Delete
            </button>

          </div>
        </div>
      </div>
    )}


  </div>




);
}

export default EmployeeList;
