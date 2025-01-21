import './login.css';

export default function Login() {
  return (
    <div className="login-container">
      <header className="header">
        <div className="logo">Roomielink</div>
        <nav className="nav">
          <a href="#" className="nav-link">Entrar</a>
          <a href="/cadastro" className="nav-link">Cadastrar</a>
          <a href="#" className="nav-button">Quero anunciar</a>
        </nav>
      </header>
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="exemplo@email.com" />
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Digite sua senha aqui" />
          <div className="forgot-password">
            <a href="#">Esqueceu a senha?</a>
          </div>
          <button type="submit">Entrar</button>
        </form>
        <div className="register">
          Não possui conta? <a href="#">Registre-se aqui!</a>
        </div>
      </div>
    </div>
  );
}
