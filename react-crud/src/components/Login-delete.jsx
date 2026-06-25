import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await api.post("/login", form);

    localStorage.setItem(
      "token",
      response.data.token
    );

    alert("Login successful");
  };

  const navigate = useNavigate();

  localStorage.setItem("token", response.data.token);
  navigate("/employees");

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;