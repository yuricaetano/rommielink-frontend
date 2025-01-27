import '../styles/globals.css';
import { Lexend_Giga } from 'next/font/google';
// import Navbar from '../components/navbar';

// Fonte principal
const lexendGiga = Lexend_Giga({
  weight: ['400', '700'], // Incluí peso 700 para possíveis títulos
  subsets: ['latin'],
});

export default function Layout({ children }) {
  return (
    <html lang="pt-BR" className={lexendGiga.className}>
      <head />
      <body>
        {/* <Navbar /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
