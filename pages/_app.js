import { Fragment } from 'react';
import Container from '../components/container';
import Footer from '../components/footer';
import Header from '../components/header';
import DefaultMeta from '../meta/default';
import '../styles/bootstrap.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<DefaultMeta
				title='Ade Firman Ardiansyah - Firmnardians'
				description='A front-end developer with 2 years of experience. I have extensive experience with the React ecosystem and i also like to launch some products.'
			/>

			<Header />
			<Container>
				<Component {...pageProps} />
			</Container>

			<Footer />
		</Fragment>
	);
}

export default MyApp;
