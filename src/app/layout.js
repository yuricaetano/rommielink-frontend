import Header from '../components/Header'; // Importando o Header corretamente

export default function Layout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <title>RoomieLink</title>
      </head>
      <body>
        <Header /> {/* Agora o Header está sendo utilizado */}
        <main>{children}</main>
        <footer>
          {/* Rodapé */}
        </footer>
      </body>
    </html>
  );
}
