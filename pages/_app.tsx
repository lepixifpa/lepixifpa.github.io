import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NavBar } from '../components/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <footer>&copy; Vitor Koch 2022</footer>
    </>
  );
}

export default MyApp
