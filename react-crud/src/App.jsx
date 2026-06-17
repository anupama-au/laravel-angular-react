import { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    department: '',
  });

  const [editId, setEditId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-center mb-8">
        Employee Management
      </h1>

      <EmployeeForm
        form={form}
        setForm={setForm}
        editId={editId}
        setEditId={setEditId}
      />

      <EmployeeList
        setForm={setForm}
        setEditId={setEditId}
      />
    </div>
  );
}

export default App;