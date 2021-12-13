import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const OtherPage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div style={{ marginTop: '16px' }}>
      <p>{t('OTHER_PAGE.CONTENT')}</p>
      <p>{t('OTHER_PAGE.SWITCH_LANGUAGE.HEADER')}</p>
      <button
        type='button'
        onClick={() => changeLanguage(i18n.language === 'en' ? 'pl' : 'en')}
      >
        {t('OTHER_PAGE.SWITCH_LANGUAGE.BUTTON')}
      </button>
    </div>
  );
};

export default OtherPage;
