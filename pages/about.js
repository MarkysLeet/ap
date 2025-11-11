import Layout from '../components/Layout';
import FloatingShapes from '../components/FloatingShapes';
import SectionWrapper from '../components/SectionWrapper';
import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <Layout title="О нас — Avenue Professional">
      <main className={styles['av-about-page']}>
        <FloatingShapes />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="4" ry="4" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8" />
                <circle cx="17.5" cy="6.5" r="0.8" />
              </svg>
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
