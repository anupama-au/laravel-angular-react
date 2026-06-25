import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        
        <Route
          path="/employees"
          element={
            <ProtectedRoute>
              <div className="min-h-screen bg-gray-100 p-8">
                 <Logout />
                <h1 className="text-5xl font-bold text-center mb-8">
                  Employee Management
                </h1>

                <EmployeeForm />
                <EmployeeList />
              </div>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;