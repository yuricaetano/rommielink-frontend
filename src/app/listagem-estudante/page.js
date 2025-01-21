import './listagem-estudante.css';

export default function ListagemEstudante() {
  const estudantes = [
    {
      id: 1,
      nome: "Ana Luiza",
      curso: "Engenharia de Software",
      dataNascimento: "15 de Maio, 2000",
      imagem: "https://via.placeholder.com/500x300",
      descricao:
        "Estudante dedicada e apaixonada por desenvolvimento web. Gosta de aprender novas tecnologias e desafios.",
    },
    {
      id: 2,
      nome: "João Pedro",
      curso: "Design Gráfico",
      dataNascimento: "22 de Julho, 1999",
      imagem: "https://via.placeholder.com/500x300",
      descricao:
        "Criativo e sempre em busca de novas formas de expressão visual. Apaixonado por design digital e animações.",
    },
    {
      id: 3,
      nome: "Maria Clara",
      curso: "Arquitetura",
      dataNascimento: "10 de Outubro, 1998",
      imagem: "https://via.placeholder.com/500x300",
      descricao:
        "Arquitetura e urbanismo são suas grandes paixões. Acredita em soluções criativas e sustentáveis para o futuro das cidades.",
    },
  ];

  return (
    <div>
      {/* Cabeçalho */}
      <header className="header">
        <div className="logo">Roomielink</div>
        <nav className="nav">
          <a href="/login" className="nav-link">Entrar</a>
          <a href="/cadastro" className="nav-link">Cadastrar</a>
          <a href="#" className="nav-button">Quero anunciar</a>
        </nav>
      </header>

      {/* Conteúdo da Listagem de Estudantes */}
      <div className="listagem-container">
        <h1 className="listagem-titulo">Listagem de Estudantes</h1>
        <div className="card-list">
          {estudantes.map((estudante) => (
            <div className="card-container" key={estudante.id}>
              <a href="#" className="card-link">
                <article className="card">
                  <figure className="card-image">
                    <img
                      src={estudante.imagem}
                      alt="thumbnail"
                      className="card-img"
                    />
                  </figure>
                  <div className="card-content">
                    <p className="card-date">{estudante.dataNascimento}</p>
                    <h1 className="card-title">{estudante.nome}</h1>
                    <p className="card-description">{estudante.descricao}</p>
                    <strong>Ver mais</strong>
                  </div>
                </article>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}