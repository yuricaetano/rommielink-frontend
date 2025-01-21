import './home.css';
import Navbar from '../../components/Navbar/index.js';
// import { fonts } from '../layout';

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <main className="main">
        <h1 className="headline">
          <span className="highlight">Reduza</span> suas despesas 
          <br />
          encontrando alguém para<br/>morar com você.
        </h1>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Digite uma cidade, ex: Pelotas" 
            className="search-input" 
          />
          <button className="search-button">→</button>
        </div>
      </main>
    </div>
  );
}