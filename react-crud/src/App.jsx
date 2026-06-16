import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-center mb-8">
        Employee Management
      </h1>

      <EmployeeForm />
      <EmployeeList />
    </div>
  );
}

export default App;
