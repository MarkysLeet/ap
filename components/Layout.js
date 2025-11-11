import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import styles from '../styles/Layout.module.css';

const Layout = ({ children, title = 'Avenue Beauty — косметика и уход' }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Avenue Beauty — уютный интернет-магазин косметики и аксессуаров для маникюра."
        />
        <link
          rel="icon"
          href={'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><text y="14" font-size="14">🌸</text></svg>'}
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
