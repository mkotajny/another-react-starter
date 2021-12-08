import './App.css';
import { useTranslation } from 'react-i18next';

const App = () => {
	const { t } = useTranslation();

	return (
		<div className='App'>
			<header className='App-header'>
				<p>{t('MAIN.WELCOME')}</p>
				<a
					className='App-link'
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
