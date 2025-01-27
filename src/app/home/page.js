"use client";

import { useState } from "react";
import Navbar from "../../components/navbar"; // Certifique-se de ajustar o caminho
import axios from "axios";
import "./styles.css";

export default function HomePage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  // Abrir e fechar modais
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  return (
    <>
      <Navbar onLoginClick={openLoginModal} onRegisterClick={openRegisterModal} />

      <main>
        {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
        {isRegisterModalOpen && <RegisterModal onClose={closeRegisterModal} />}
      </main>
    </>
  );
}

function LoginModal({ onClose }) {
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
          {/* <label className="forgot-password">Esqueci minha senha</label> */}
          <button className="button-submit" type="submit">Entrar</button>
        </form>
        <p className="register-link">
          Não possui conta? <span onClick={() => openRegisterModal()}>Cadastre-se!</span>
        </p>
      </div>
    </div>
  );
}


function RegisterModal({ onClose }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
    dataNascimento: "",
    nomeUsuario: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

  if (formData.senha !== formData.confirmarSenha) {
    setError("As senhas não coincidem.");
    return;
  }

    try {
      const response = await axios.post("http://localhost:3000/", formData);
      setSuccessMessage("Cadastro realizado com sucesso!");
      onClose();
    } catch (err) {
      const errorMessage =
        err.response?.data?.error || "Erro ao criar usuário. Tente novamente.";
      setError(errorMessage);
    }
  };

  return (
    <div className="modal-register" onClick={onClose}>
      <div className="modal-content-register" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h2>Cadastrar</h2>
        {error && <p className="error-message">{error}</p>}
        {success && (
          <p className="success-message">Cadastro realizado com sucesso!</p>
        )}
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="telefone">Telefone</label>
          <input
            type="telephone"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
          />
          <label htmlFor="dataNascimento">Data de Nascimento</label>
          <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleInputChange}
          />
          <label htmlFor="nomeUsuario">Nome de Usuário:</label>
          <input
            type="text"
            id="nomeUsuario"
            name="nomeUsuario"
            value={formData.nomeUsuario}
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
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            value={formData.confirmarSenha}
            onChange={handleInputChange}
            required
          />
          <button className="button-submit" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
