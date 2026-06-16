import { useState } from 'react';
import api from '../services/api';

function EmployeeForm() {
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    department: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post('/employees', form);

    setForm({
      name: '',
      email: '',
      phone: '',
      position: '',
      department: '',
    });

    alert('Employee Added');
  };

  
  return (
    <form
  onSubmit={handleSubmit}
  className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6"
>
  <h2 className="text-2xl font-bold mb-6">
    Add Employee
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <input
      type="text"
      placeholder="Name"
      value={form.name}
      onChange={(e) =>
        setForm({ ...form, name: e.target.value })
      }
      className="border rounded-lg p-3"
    />

    <input
      type="email"
      placeholder="Email"
      value={form.email}
      onChange={(e) =>
        setForm({ ...form, email: e.target.value })
      }
      className="border rounded-lg p-3"
    />

    <input
      type="text"
      placeholder="Phone"
      value={form.phone}
      onChange={(e) =>
        setForm({ ...form, phone: e.target.value })
      }
      className="border rounded-lg p-3"
    />

    <input
      type="text"
      placeholder="Position"
      value={form.position}
      onChange={(e) =>
        setForm({ ...form, position: e.target.value })
      }
      className="border rounded-lg p-3"
    />

    <input
      type="text"
      placeholder="Department"
      value={form.department}
      onChange={(e) =>
        setForm({ ...form, department: e.target.value })
      }
      className="border rounded-lg p-3 md:col-span-2"
    />

  </div>

  <button
    type="submit"
    className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
  >
    Save Employee
  </button>
</form>
  );
}

export default EmployeeForm;
