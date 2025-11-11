import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import SectionWrapper from '../components/SectionWrapper';
import styles from '../styles/AboutPage.module.css';

const FloatingOrbs = dynamic(() => import('../components/FloatingOrbs'), { ssr: false });

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" fill="currentColor" opacity="0.12" />
    <rect x="5" y="5" width="14" height="14" rx="4" ry="4" stroke="currentColor" fill="none" />
    <circle cx="12" cy="12" r="3.2" stroke="currentColor" fill="none" />
    <circle cx="16.5" cy="7.5" r="1.2" fill="currentColor" />
  </svg>
);

const AboutPage = () => {
  return (
    <Layout title="О нас — Avenue Professional">
      <main className={styles['av-about-page']}>
        <FloatingOrbs />
        <SectionWrapper className={styles['av-about-hero']}>
          <h1 className="av-hero-title">О нас</h1>
          <p>
            Avenue Professional — бренд профессиональной косметики для маникюра, сочетающий качество,
            стиль и заботу о мастерах.
          </p>
          <div className={styles['av-about-heroSocial']}>
            <a
              href="https://www.instagram.com/avenue_professional_official"
              target="_blank"
              rel="noopener noreferrer"
              className={styles['av-about-heroSocialLink']}
              aria-label="Мы в Instagram"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
          </div>
        </SectionWrapper>
        <SectionWrapper className={styles['av-about-infoGrid']}>
          <div className={styles['av-about-card']}>
            <h3>Наши часы работы</h3>
            <p>Понедельник–Пятница: 10:00–19:00</p>
            <p>Суббота: 10:00–19:00</p>
            <p>Воскресенье: выходной</p>
          </div>
          <div className={styles['av-about-card']}>
            <h3>Наш адрес</h3>
            <p>Fener Mahallesi, Bülent Ecevit Blv 2B, Laura AVM, Antalya</p>
            <p>+90 531 270 5539</p>
          </div>
        </SectionWrapper>
        <SectionWrapper className={styles['av-about-contact']}>
          <h3>Свяжитесь с нами</h3>
          <form className={styles['av-about-form']}>
            <label className={styles['av-sr-only']} htmlFor="about-name">
              Ваше имя
            </label>
            <input id="about-name" type="text" placeholder="Ваше имя" required className={styles['av-about-input']} />
            <label className={styles['av-sr-only']} htmlFor="about-email">
              Email
            </label>
            <input id="about-email" type="email" placeholder="Email" required className={styles['av-about-input']} />
            <label className={styles['av-sr-only']} htmlFor="about-message">
              Сообщение
            </label>
            <textarea
              id="about-message"
              placeholder="Сообщение..."
              rows={4}
              required
              className={styles['av-about-textarea']}
            />
            <button type="submit" className={styles['av-about-submit']}>
              Отправить
            </button>
          </form>
        </SectionWrapper>
      </main>
    </Layout>
  );
};

export default AboutPage;
