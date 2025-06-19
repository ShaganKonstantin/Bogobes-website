import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Путь к вашему CSS-файлу с Tailwind

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}