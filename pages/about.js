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
            <a
              href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiJ1c-AneqQAxWlZ_EDHYtMJmQQ4kB6BAg-EAM&url=%2Fmaps%2Fplace%2F%2Fdata%3D!4m2!3m1!1s0x14c39ae87f276445%3A0x4382b249e7f49e82%3Fsa%3DX%26ved%3D1t%3A8290%26ictx%3D111&usg=AOvVaw11HEThT72xIljzye8pqBOQ&opi=89978449"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Открыть адрес на карте"
              className={styles['av-about-cardAction']}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </a>
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
