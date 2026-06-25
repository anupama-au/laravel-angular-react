import api from '../services/api';

function Header() {
  const handleLogout = async () => {
    try {
      await api.post('/logout'); // Laravel logout route

      localStorage.removeItem('token'); // if you store token
      window.location.href = '/login'; // redirect
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-between items-center bg-white shadow p-4">
      <h1 className="text-xl font-bold">Employee Management System</h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}

export default Header;