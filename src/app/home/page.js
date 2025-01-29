"use client";

import { useState } from "react";
import Navbar from "@components/navbar";
import axios from "axios";
import "./styles.css";

export default function HomePage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [cidade, setCidade] = useState('');
  const [estudantes, setEstudantes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false); // Variável de controle para exibir os resultados

  // Abrir e fechar modais
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  const handleSearch = async () => {
    console.log('Cidade buscando:', cidade);
    setLoading(true);
    setHasSearched(false);

    try {
      const response = await axios.get(
        `https://rommielink-backend-git-main-yuris-projects-98f41e79.vercel.app/api/estudante?page=1&limit=10&cidade=${cidade}`
      );
      console.log('URL da requisição:', `https://rommielink-backend-git-main-yuris-projects-98f41e79.vercel.app/api/estudante?page=1&limit=10&cidade=${cidade}`);
      console.log('Resposta da API:', response.data);
      setEstudantes(response.data.estudantes);
      setHasSearched(true); // Marca que a pesquisa foi realizada
    } catch (error) {
      console.error('Erro na requisição', error);
    } finally {
      setLoading(false);
    }
  };

  const calcularIdade = (dataNascimento) => {
    const nascimento = new Date(dataNascimento);
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth();
    if (mes < nascimento.getMonth() || (mes === nascimento.getMonth() && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  };

  return (
    <>
      <Navbar onLoginClick={openLoginModal} onRegisterClick={openRegisterModal} />

      <main className="home-main">
        {/* Modal Handling */}
        {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
        {isRegisterModalOpen && <RegisterModal onClose={closeRegisterModal} />}

        {/* Frase de efeito e barra de pesquisa */}
        <section className="home-hero">
          <h1 className="home-hero-title">
            Reduza seus gastos<br/> encontrando alguém para<br/>morar com você
          </h1>
          <div className="home-search-bar">
            <input
              type="text"
              placeholder="Digite a cidade..."
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              className="home-input"
            />
            <button
              onClick={handleSearch}
              className="search-icon"
              disabled={loading}
            >
              <span>⏎</span>
            </button>
          </div>
        </section>
        
        {/* Exibição dos resultados */}
        {hasSearched && (
        <section className="home-results">
          {loading ? (
            <p>Carregando...</p>
          ) : estudantes.length > 0 ? (
            <ul className="home-results-list">
              {estudantes.map((estudante) => (
                <li key={estudante.id} className="home-result-item">
                  <p className="home-result-name">
                    {estudante.user.nome || 'Nome não disponível'}
                  </p>
                  <p>Curso: {estudante.curso || 'Não informado'}</p>
                  <p>Instituição: {estudante.instituicao || 'Não informado'}</p>
                  <p>Idade: {calcularIdade(estudante.user.dataNascimento)} anos</p>
                  <p>Cidade: {estudante.cidade || 'Não informada'}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum resultado encontrado para a cidade: {cidade}</p>
          )}
        </section>
        )}
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
      const response = await axios.post("https://rommielink-backend-git-main-yuris-projects-98f41e79.vercel.app/api/user/login", formData);
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
          <button className="button-submit" type="submit">⏎</button>
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
    confirmarSenha: "", // Adicionando confirmar senha ao estado
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
      await axios.post(`https://rommielink-backend-git-main-yuris-projects-98f41e79.vercel.app/api/user`, formData);
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
          <button className="button-submit" type="submit">⏎</button>
        </form>
      </div>
    </div>
  );
}