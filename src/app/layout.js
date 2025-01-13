import '../styles/globals.css';
import { Roboto } from 'next/font/google';  // Importando corretamente a fonte
//bebasNeue
const  roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <head />
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}