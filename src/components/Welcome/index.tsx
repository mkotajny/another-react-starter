import { useTranslation } from 'react-i18next';
import styles from './welcome.module.css';

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <header className={styles.appHeader}>
      <img
        src='https://user-images.githubusercontent.com/33925073/145850054-8554dce8-11a7-444a-a923-fcb418e76dcf.jpg'
        className={styles.appLogo}
        alt='logo'
      />
      <p>{t('MAIN.WELCOME')}</p>
      <a
        className={styles.appLink}
        href='https://github.com/mkotajny/another-react-starter'
        target='_blank'
        rel='noopener noreferrer'
      >
        {t('MAIN.MORE_INFO')}
      </a>
    </header>
  );
};

export default Welcome;
