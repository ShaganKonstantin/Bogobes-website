import type { AppProps } from 'next/app';
import '../styles/globals.css'; 
import { LazyMotion, domAnimation } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <LazyMotion features={domAnimation}>
    <Component {...pageProps} />
  </LazyMotion>
  );
}