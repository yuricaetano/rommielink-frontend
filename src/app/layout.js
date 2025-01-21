import '../styles/globals.css';
import { Lexend_Giga, Archivo_Black } from 'next/font/google';

// Fonte principal
const lexendGiga = Lexend_Giga({
  weight: '400',
  subsets: ['latin'],
});

// Fonte para destaque
const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
});

export default function Layout({ children }) {
  return (
    <html lang="pt-BR" className={lexendGiga.className}>
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}

export const fonts = {
  archivoBlack: archivoBlack.className,
};
