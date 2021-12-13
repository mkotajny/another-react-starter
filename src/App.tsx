import { useTranslation } from 'react-i18next';

import logo from './assets/images/logo.jpg';
import styles from './App.module.css';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt='logo' />
        <p>{t('MAIN.WELCOME')}</p>
        <a
          className={styles.appLink}
          href='https://github.com/mkotajny/another-react-starter'
          target='_blank'
          rel='noopener noreferrer'
        >
          Get more info
        </a>
      </header>
    </div>
  );
};
export default App;
