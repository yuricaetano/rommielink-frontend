import './cadastro.css';

export default function Cadastro() {
  return (
    <div className="login-container">
      <header className="header">
        <div className="logo">Roomielink</div>
        <nav className="nav">
          <a href="/login" className="nav-link">Entrar</a>
          <a href="/cadastro" className="nav-link">Cadastrar</a>
          <a href="#" className="nav-button">Quero anunciar</a>
        </nav>
      </header>
      <div className="login-box">
        <h1>Cadastrar</h1>
        <form>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" placeholder="Digite seu nome" />

          <label htmlFor="dataNascimento">Data de Nascimento</label>
          <input type="date" id="dataNascimento" />

          <label htmlFor="telefone">Telefone</label>
          <input type="tel" id="telefone" placeholder="(xx) xxxxx-xxxx" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="exemplo@email.com" />

          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" placeholder="Digite sua senha aqui" />

          <label htmlFor="nomeUsuario">Nome de Usuário</label>
          <input type="text" id="nomeUsuario" placeholder="Escolha um nome de usuário" />

          <button type="submit">Cadastrar</button>
        </form>
        <div className="register">
          Já possui conta? <a href="/login">Entrar aqui!</a>
        </div>
      </div>
    </div>
  );
}