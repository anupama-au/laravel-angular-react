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
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value })
        }
      />

      <input
        placeholder="Position"
        value={form.position}
        onChange={(e) =>
          setForm({ ...form, position: e.target.value })
        }
      />


      <input
        placeholder="Department"
        value={form.department}
        onChange={(e) =>
          setForm({ ...form, department: e.target.value })
        }
      />

      <button type="submit">
        Save
      </button>
    </form>
  );
}

export default EmployeeForm;
