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
			{/* default meta */}
			<DefaultMeta />
			{/* default meta */}

			<Header />
			<Container>
				<Component {...pageProps} />
			</Container>

			<Footer />
		</Fragment>
	);
}

export default MyApp;
