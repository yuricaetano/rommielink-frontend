"use client";

import { useState } from "react";
import axios from "axios";
import "../../home/styles.css";


export default function LoginModal({ onClose, onRegisterClick }) {
  const [formData, setFormData] = useState({ email: "", senha: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:3000/login", formData);
      alert("Login bem-sucedido! Token: " + response.data.token);
      onClose();
    } catch (err) {
      const errorMessage =
        err.response?.data?.error || "Erro ao fazer login. Tente novamente.";
      setError(errorMessage);
    }
  };

  return (
    <div className="modal-login" onClick={onClose}>
      <div className="modal-content-login" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h1>Entrar</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleInputChange}
            required
          />
          <button className="button-submit" type="submit">
            Entrar
          </button>
        </form>
        <p className="register-link">
          Não possui conta? <span onClick={onRegisterClick}>Cadastre-se!</span>
        </p>
      </div>
    </div>
  );
}
