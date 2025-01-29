import Link from 'next/link'; // Para usar o sistema de navegação do Next.js
import Image from 'next/image';
import './styles.css'

export default function Navbar({ onLoginClick, onRegisterClick }) {
  return (
    <header className="header">
            <Link href="/">
        <Image 
          src="/logoPreto.png" 
          alt="Logo" 
          width={100} 
          height={10} 
          className="logo"
        />
      </Link>
      <div className="nav">
          <p onClick={onLoginClick} className="nav-link">
            Entrar
          </p>
          <p onClick={onRegisterClick} className="nav-link">
            Cadastrar
          </p>
        <Link href="/quero-anunciar" className="nav-button">
          Quero Anunciar
        </Link>
      </div>
    </header>
  );
}
