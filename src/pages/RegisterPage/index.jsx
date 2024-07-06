import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useLocation();

  const handleRegister = (e) => {
    e.preventDefault();
    if (email && password) {
      alert("Muvaffaqiyatli ro'yxatdan o'tdingiz");
      history.push("/login");
    } else {
      alert("Iltimos, barcha maydonlarni to'ldiring");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Ro'yxatdan o'tish</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Parol:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ro'yxatdan o'tish
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
